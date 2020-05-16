import React,{useCallback, useState } from 'react';
import {
    List,
    Button,
    Input,
    Empty,
    ConfigProvider
} from 'antd';
import {
    ADD_PRODUCT,
    ADD_COUNT,
    DOWN_COUNT,
    CLEAR_CERT,
    DELETE_PRODUCT
} from '../../redux/actions/action_type'

import './Cert.less'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

export const Cert =()=>{
    const shopCert = useSelector(state=>state.shopCertReducers);
    const dispatch = useDispatch();
    const history = useHistory();
    const [goShop,setGoShop]=useState(false);

    const clearCert=()=>{
        dispatch({type:CLEAR_CERT})
    }
    const handleGoShop=()=>{
        if(goShop==true){
           return <Redirect to='/shop'/>
        }
        
    }
    return(

        <>
        {handleGoShop()}
          <List
                itemLayout="horizontal"
                dataSource={shopCert}
                locale={{
                    emptyText:(
                    <span>
                        <h1>購物車目前沒有貨品</h1>
                        <Button onClick={()=>setGoShop(true)}>Go Shop</Button>
                    </span>
                )}}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={item.product}
                    description={item.description}
                    />
                    <Button onClick={()=>dispatch({type:DELETE_PRODUCT,data:item.product})}>Delete</Button>
                    <Button shape="circle" onClick={()=>dispatch({type:ADD_COUNT,data:item.product})}>+</Button>
                    <Input min={1}  value={item.count} style={{width:'50px'}}/>
                    <Button shape="circle" onClick={()=>dispatch({type:DOWN_COUNT,data:item.product})}>-</Button>
                </List.Item>
                )}
            />
            <div style={{textAlign:'center'}}>
              <Button type="primary" size="large"style={{margin:'20px'}} onClick={clearCert}>Clear Cert</Button>
            </div>
            
        </>
    )
}