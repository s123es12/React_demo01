import React, {useReducer, useState, useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect,useLocation } from 'react-router-dom';
import {useCookies} from 'react-cookie';
import {useSelector} from 'react-redux';

import {
    Layout,
    Menu,
} from "antd";
import {
    UserOutlined
} from '@ant-design/icons';

import {About} from './component/About';
import {Home} from './component/Home/Home';
import {Register} from './component/Register/Register';
import {Shop} from './component/Shop/Shop';
import {Cert} from './component/Cert/Cert';
import {Login} from './component/Login/Login';

import './App.less';

const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;
export const App=()=>{
    const [Cookies,setCookies,removeCookie] = useCookies(['user_id']);
    const reducers = useSelector(state=>state);
    const {userReducers} = reducers;
    const location = useLocation();
    
    const checkUserLogin =(user_id)=>{
        
        var isLogin = false;
        for(var i=0;i<userReducers.length;i++){
            if(userReducers[i].user_id===user_id && Cookies.user_id===user_id){
                isLogin=true;
                break;
            }
        }
        return (isLogin)?true:false;
    }
    
    const handleLogout=()=>{
        removeCookie('user_id',{path:'/'});
    }
    return(
        
        <div style={{height:"100%"}}>
           
            <Layout style={{height:"100%"}}>
                <Header style={{backgroundColor:"unset"}}>
                    <Menu 
                        mode={"horizontal"} 
                        style={{backgroundColor:"rgba(1,1,1,0.2)"}}
                        defaultSelectedKeys={['/home']}
                        selectedKeys={[location.pathname]}
                    >   
                        <Menu.Item key='/home'><Link to='/home'>Home</Link></Menu.Item>
                        <Menu.Item key='/about'><Link to='/about'>About</Link></Menu.Item>
                        <Menu.Item key='/shop'><Link to='/shop'>Shop</Link></Menu.Item>
                        <Menu.Item key='/cert'><Link to='/cert'>Cert</Link></Menu.Item>
                        
                        {checkUserLogin(Cookies.user_id)?null:
                        <Menu.Item><Link to='/register'>Register</Link></Menu.Item>}
                        
                        {checkUserLogin(Cookies.user_id)?null:
                        <Menu.Item><Link to='/login'>Login</Link></Menu.Item>}

                        {checkUserLogin(Cookies.user_id)?<Redirect to='/home/'/>:null}
                        
                       
                       
                        <Menu.Item 
                            icon={<UserOutlined style={{fontSize:'20px'}}/>}
                            style={{position:'absolute',right:0,marginRight:'50px'}}
                            onClick={handleLogout}
                        >Logout</Menu.Item>
                       
                        
                    </Menu>
                    
                </Header>

                <Content style={{height:"100%",padding:"0 50px",marginTop: '5px'}}>
                    <Switch>
                    
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About}/>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/cert" component={Cert}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Redirect to="/home"/>
                    </Switch>
                </Content>

                <Footer style={{bottom:"0",width:"100%"}}>Footer</Footer>

            </Layout>
           
        </div>
        
    );
   
}
