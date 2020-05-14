import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link, Redirect} from 'react-router-dom'

import {BigProduct} from './SubShop/BigProduct';
import {RunProduct} from './SubShop/RunProduct';
import {SmallProduct} from './SubShop/SmallProduct';

import { 
    Layout, Menu,
} from 'antd';

import './Shop.less';

const { Header, Footer, Sider, Content } = Layout;
export const Shop =()=>{
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
                            <Redirect to="/home/bigProduct"/>
                        </Switch>
                        
                    </Layout>
                </Layout>
               
            </Router>
        </>
    )
}