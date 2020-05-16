import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link, Redirect} from 'react-router-dom'

import {BigProduct} from './SubShop/BigProduct';
import {RunProduct} from './SubShop/RunProduct';
import {SmallProduct} from './SubShop/SmallProduct';

import { 
    Layout, Menu,
} from 'antd';

import './Shop.less';

const { Sider} = Layout;
export const Shop =()=>{
   
    return(
        <>
            <Router>
                <Layout>
                    <Sider>
                        <Menu >
                            <Menu.Item><Link to="/shop/bigProduct">大型器械</Link></Menu.Item>
                            <Menu.Item><Link to="/shop/smallProduct">啞鈴</Link></Menu.Item>
                            <Menu.Item><Link to="/shop/runProduct">跑步機</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Switch>
                            <Route path="/shop/bigProduct" component={BigProduct}/>
                            <Route path="/shop/smallProduct" component={SmallProduct}/>
                            <Route path="/shop/runProduct" component={RunProduct}/>
                            <Redirect to="/shop/bigProduct"/>
                        </Switch>
                        
                    </Layout>
                </Layout>
               
            </Router>
        </>
    )
}