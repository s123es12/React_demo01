import React, { useEffect ,useRef,useState} from 'react';
import { Form,
    Input,
    Button,
    Result,
    Modal
} from 'antd';
import {useDispatch,useSelector} from 'react-redux'
import { useCookies } from 'react-cookie';

import {useHistory} from'react-router-dom'

import './Login.less';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export const Login =()=>{
    
    const reducers = useSelector(state=>state);
    const [cookies, setCookie] = useCookies(['user_id']);
    const history = useHistory();
    const [showModal,setShowModal] = useState(false);
    const [userLoginSuccess,setUserLoginSuccess] = useState(false);
    const [result,setResult] = useState();
    const formRef = useRef(null);
    const [id,setId]=useState();

    const onFinish = values => {
        const {userReducers} = reducers;
       
        for(var i=0;i<userReducers.length;i++){
            if(values.username===userReducers[i].username){
                if(values.password === userReducers[i].password){
                    setUserLoginSuccess(true);
                    //let user_id = userReducers[i].user_id;
                    //setCookie('user_id',user_id,{path:'/',maxAge:60*60*24});
                    setId(userReducers[i].user_id);
                }
            }
        }
        if(!userLoginSuccess){
            setShowModal(true);
        }

    };
    const handleCancel=()=>{
        setShowModal(false);
        formRef.current.resetFields();
        
    }
    const handleSubmitBtn=()=>{
        setShowModal(false);
        if(userLoginSuccess){
            setCookie('user_id',id,{path:'/',maxAge:60*60*24});
            history.replace('/login');
        }else{
            history.replace('/login');
        }
        formRef.current.resetFields()
        
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


                <Form.Item >
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
            <Modal
                title="Result"
                visible={showModal}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                >
                {userLoginSuccess===true?
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
                :
                <Result
                    status="error"
                    title={result}
                    subTitle="Username or password Invaild! Please input again."
                    extra={[
                    <Button type="primary" key="login" onClick={handleSubmitBtn}>
                        Input again
                    </Button>,
                    <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
                    ]}
                />
            }
                
            </Modal>
        </div>
    )
}
