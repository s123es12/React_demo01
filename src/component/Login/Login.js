import React, { useEffect } from 'react';
import { Form, Input, Button} from 'antd';
import {useDispatch,useSelector} from 'react-redux'
import { useCookies } from 'react-cookie';
import {USER_LOGIN} from '../../redux/actions/action_type';
import {useHistory} from'react-router-dom'

import './Login.less';

export const Login =()=>{
    const dispatch = useDispatch();
    const reducers = useSelector(state=>state);
    const [cookies, setCookie] = useCookies(['user_id']);
    const history = useHistory();
    
    const onFinish = values => {
        console.log('Success:', values);
        const {userReducers} = reducers;
        console.log(userReducers);
        var loginSuccess = false;
        for(var i=0;i<userReducers.length;i++){
            if(values.username===userReducers[i].username){
                if(values.password === userReducers[i].password){
                    loginSuccess = true;
                    let user_id = userReducers[i].user_id;
                    
                    setCookie('user_id',user_id,{path:'/',maxAge:60*60*24});
                    
                    
                    history.replace('/home');
                }
            }
        }
        if(!loginSuccess){
            console.log("username or password is Invaild!");
           
        }
        

    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        
    };
    return(
        <div style={{border:'10px solid yellowgreen'}}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!'}
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item >
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
