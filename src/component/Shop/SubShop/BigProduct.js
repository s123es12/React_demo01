import React,{useState} from 'react';

import {useDispatch,useSelector} from 'react-redux'

import { 
    Layout,
    Card,
    Col,
    Row,
    Modal
} from 'antd';

import big01 from '../../../resources/Big01.png';
import big02 from '../../../resources/Big02.png';
import big03 from '../../../resources/Big03.png';
import big04 from '../../../resources/Big04.png';
import big05 from '../../../resources/Big05.png';
import big06 from '../../../resources/Big06.png';
import big07 from '../../../resources/Big07.png';

import { ADD_PRODUCT,ADD_COUNT } from '../../../redux/actions/action_type';

const { Header, Content } = Layout;
const { Meta } = Card;

export const BigProduct =()=>{

    const [showModal,setShowModal] = useState(false);
    const [selectedName,setSelectedName]=useState('');
    const [selectedDescription,setSelectedDescription]=useState('');
    const [selectedPrice,setSelectedPrice]=useState();

    const shopCertReducers = useSelector(state=>state.shopCertReducers);

    const dispatch = useDispatch();

    const images =[
        {name:'bigProduct01', src:big01,description:'bigProduct01',price:9999 },
        {name:'bigProduct02', src:big02,description:'bigProduct02',price:9999 },
        {name:'bigProduct03', src:big03,description:'bigProduct03',price:9999 },
        {name:'bigProduct04', src:big04,description:'bigProduct04',price:9999 },
        {name:'bigProduct05', src:big05,description:'bigProduct05',price:9999 },
        {name:'bigProduct06', src:big06,description:'bigProduct06',price:9999 },
        {name:'bigProduct07', src:big07,description:'bigProduct07',price:9999 },
    ]

    const handleBuyBtn=()=>{
        
        setShowModal(false);
        let findProduct =false;
        let product={selectedName,selectedDescription,selectedPrice};
        if(shopCertReducers.length>0){
            shopCertReducers.map((item)=>{
                if(item.product === product.selectedName){
                    findProduct=true;  
                }else{
                    for(var i=0;i<shopCertReducers.length;i++){
                        if(shopCertReducers[i].product===product.selectedName){
                            findProduct=true;  
                        }
                    }
                    
                }
            })
        }else{
            findProduct=false;  
        }
        if(findProduct){
            dispatch({type:ADD_COUNT,data:product.selectedName})
        }else{
            dispatch({type:ADD_PRODUCT,data:product})
        }
        
        
    }
    return(
        
        <>
            <Header>BigProduct</Header>
            <Content style={{display:'flex',padding:'20px'}}>
                <Row>
                    {images.map((item,index)=>(
                        <Col span={8} key={index}>
                            <Card
                                hoverable
                                style={{ margin:'20px'}}
                                cover={<img alt={item.description} src={item.src} />}
                                onClick={()=>{
                                    setShowModal(true);
                                    setSelectedName(item.name);
                                    setSelectedDescription(item.description);
                                    setSelectedPrice(item.price);
                                }}
                            >
                                <Meta 
                                    title={item.name} 
                                    description={item.description}
                                />
                                <h1>${item.price}</h1>
                            </Card>
                            
                        </Col>
                       
                    ))}
                    <Modal
                        title={selectedName}
                        visible={showModal}
                        onOk={handleBuyBtn}   
                        onCancel={()=>setShowModal(false)}
                        okText="購買"
                        cancelText="我決定不買了"   
                    >
                        <p>Description: {selectedDescription}</p>
                        <p>Price: ${selectedPrice}</p>

                        
                    </Modal>
                    
                   
                </Row>

                
            </Content>
            
        </>
    )
}