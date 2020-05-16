import React, {useReducer, useState} from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import {useSelector} from 'react-redux';
import {userReducers} from './redux/reducers/reducers'
import {
    Layout,
    Menu,
    Button,
    Dropdown
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

export const App=()=>{
    const [Cookies,setCookies] = useCookies(['user_id']);
    const reducers = useSelector(state=>state);
    
    const {userReducers} = reducers;
    
    const checkUserLogin =(user_id)=>{
        
        var isLogin = false;
        for(var i=0;i<userReducers.length;i++){
            if(userReducers[i].user_id===user_id && Cookies.user_id===user_id){
                setCookies('user_id',user_id,{path:'/',maxAge:60*60*24});
                isLogin=true;
                break;
            }
        }
        return (isLogin)?true:false;
    }
    const checkUserInfo=(user_id)=>{
        for(var i=0;i<userReducers.length;i++){
            if(userReducers[i].user_id===user_id){
                return userReducers[i];
            }
        }
    }
    
    return(
        <div style={{height:"100%"}}>
        
        <Router>
                <Layout style={{height:"100%"}}>
                    <Header style={{backgroundColor:"unset"}}>
                        <Menu 
                            mode={"horizontal"} style={{backgroundColor:"rgba(1,1,1,0.3)"}}
                            
                        >   
                            <Menu.Item><Link to='/home'>Home</Link></Menu.Item>
                            <Menu.Item><Link to='/about'>About</Link></Menu.Item>
                            <Menu.Item><Link to='/shop'>Shop</Link></Menu.Item>
                            <Menu.Item><Link to='/cert'>Cert</Link></Menu.Item>
                           
                            {checkUserLogin(Cookies.user_id)?null:
                            <Menu.Item><Link to='/register'>Register</Link></Menu.Item>}
                            
                            {checkUserLogin(Cookies.user_id)?null:
                            <Menu.Item><Link to='/login'>Login</Link></Menu.Item>}

                            {checkUserLogin(Cookies.user_id)?<Redirect to='/home/'/>:null}
                            
                            
                            <Menu.Item 
                                style={{position:"absolute",right:0,marginRight:'50px'}}
                                icon={<UserOutlined style={{fontSize:'20px'}}/>}>
                            </Menu.Item>
                            
                        </Menu>
                       
                    </Header>

                    <Content style={{height:"100%",padding:"0 50px"}}>
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
            
            
        </Router>
       

    </div>
    );
}
