import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

import {BigProduct} from './SubHome/BigProduct';
import {RunProduct} from './SubHome/RunProduct';
import {SmallProduct} from './SubHome/SmallProduct';

import { 
    Layout, Menu,
} from 'antd';

import './Home.less';

const { Header, Footer, Sider, Content } = Layout;
export const Home =()=>{
    return(
        <>
            <Router>
                <Layout>
                    <Sider>
                        <Menu>
                            <Menu.Item><Link to="/home/bigProduct">大型器械</Link></Menu.Item>
                            <Menu.Item><Link to="/home/smallProduct">啞鈴</Link></Menu.Item>
                            <Menu.Item><Link to="/home/runProduct">跑步機</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Switch>
                            <Route path="/home/bigProduct" component={BigProduct}/>
                            <Route path="/home/smallProduct" component={SmallProduct}/>
                            <Route path="/home/runProduct" component={RunProduct}/>
                        </Switch>
                        
                    </Layout>
                </Layout>
               
            </Router>
        </>
    )
}