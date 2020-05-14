import React, {} from 'react'
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from 'react-router-dom';

import {
    Layout,
    Menu
} from "antd";

import {About} from './component/About';
import {Home} from './component/Home/Home';
import {Register} from './component/Register';
import {Shop} from './component/Shop/Shop';
import {Cert} from './component/Cert';

const { Header, Footer, Content } = Layout;

export const App=()=>{
    return(
        <div style={{height:"100%"}}>

        <Router>
                <Layout style={{height:"100%"}}>
                    <Header style={{backgroundColor:"unset"}}>
                        <Menu 
                            mode={"horizontal"} style={{backgroundColor:"unset"}}
                        >
                            <Menu.Item><Link to='/home'>Home</Link></Menu.Item>
                            <Menu.Item><Link to='/about'>About</Link></Menu.Item>
                            <Menu.Item><Link to='/shop'>Shop</Link></Menu.Item>
                            <Menu.Item><Link to='/register'>Register</Link></Menu.Item>
                            <Menu.Item><Link to='/cert'>Cert</Link></Menu.Item>
                        </Menu>
                    
                    </Header>

                    <Content style={{height:"100%",padding:"0 50px"}}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About}/>
                            <Route path="/shop" component={Shop}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/cert" component={Cert}/>

                            <Redirect to="/home"/>
                        </Switch>
                    </Content>

                    <Footer style={{bottom:"0",width:"100%"}}>Footer</Footer>

                </Layout>
            
            
        </Router>
       

    </div>
    );
}
