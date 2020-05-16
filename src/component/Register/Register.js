import React, { useState,useRef } from 'react';
import { 
    Form,
    Input,
    Button,
    Modal,
    Result
} from 'antd';
import { useDispatch, useSelector } from 'react-redux'


import {USER_REGISTER} from '../../redux/actions/action_type'

import './Register.less'
import { useHistory } from 'react-router-dom';



export const Register =()=>{
    const reducers = useSelector(state=>state)
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal,setShowModal] = useState(false);
    const [registerSuccess,setRegisterSuccess] = useState(false);
    const [result,setResult] = useState();
    const formRef = useRef(null);
    
    const onFinish = values => {
        console.log('Success:', values);
        const {userReducers} = reducers;
        console.log(reducers); 
        var canRegister = true;
        for(var i=0;i<userReducers.length;i++){
            if(userReducers[i].username === values.username){
                console.log("Account is already exists");
                setResult("Account is already exists");
                canRegister = false;
            }
        }
        if(canRegister){
            console.log(values.username);
            dispatch({type:USER_REGISTER,values});
            setShowModal(true);
            setRegisterSuccess(true);
            setResult("Successfully Registered Account!");
            
        }else{
            setShowModal(true);
            setRegisterSuccess(false);
        }
    };
    const handleCancel=()=>{
        setShowModal(false);
        formRef.current.resetFields();
        
    }
    const handleSubmitBtn=()=>{
        setShowModal(false);
        if(registerSuccess){
            history.replace('/login');
        }else{
            history.replace('/register');
        }
        formRef.current.resetFields();
    }
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
                ref={formRef}
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

                <Form.Item
                    label="Comfim Password"
                    name="comfim password"
                    rules={[
                        { required: true, message: 'Please input your password!'}
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {required:true,message:'Please input your email!'},
                        {pattern:new RegExp(/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]{2,4}$/),message:'Invaild Email! Please input again'}
                    ]}
                >
                    <Input />
                </Form.Item>
               

                <Form.Item >
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
            <Modal
                title="Result"
                visible={showModal}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                >
                {registerSuccess===true?
                    <Result
                        status="success"
                        title={result}
                        subTitle="Now, You can chick the button to login page or cancel"
                        extra={[
                            <Button type="primary" key="login" onClick={handleSubmitBtn}>
                                Go Login
                            </Button>,
                            <Button key="cancel" onClick={handleCancel}>Cancel</Button>
                        ]}
                    />
                :<Result
                    status="error"
                    title={result}
                    subTitle="Please check and modify the following information before resubmitting."
                    extra={[
                    <Button type="primary" key="login" onClick={handleSubmitBtn}>
                        Go Register
                    </Button>,
                    <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
                    ]}
                />
            }
                
            </Modal>
        </div>
    )
}

  

