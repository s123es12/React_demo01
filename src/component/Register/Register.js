import React from 'react';
import { Form, Input, Button, Checkbox} from 'antd';


import './Register.less'


export const Register =()=>{
    const onFinish = values => {
        console.log('Success:', values);
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
                        {pattern:new RegExp(/^[0-9a-zA-Z]+\@[0-9a-zA-Z]+\.[0-9a-zA-Z]{2,4}$/),message:'Invaild Email! Please input again'}
                    ]}
                >
                    <Input />
                </Form.Item>
               

                <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
