import React, {useState} from 'react';

import {useDispatch,useSelector} from 'react-redux'

import { 
    Layout,
    Card,
    Col,
    Row,
    Modal
} from 'antd';

import { ADD_PRODUCT,ADD_COUNT } from '../../../redux/actions/action_type';

import small01 from '../../../resources/small01.png';
import small02 from '../../../resources/small02.png';
import small03 from '../../../resources/small03.png';
import small04 from '../../../resources/small04.png';

const { Header, Content } = Layout;
const { Meta } = Card;

export const SmallProduct =()=>{
    const [showModal,setShowModal] = useState(false);
    const [selectedName,setSelectedName]=useState('');
    const [selectedDescription,setSelectedDescription]=useState('');
    const [selectedPrice,setSelectedPrice]=useState();

    const shopCertReducers = useSelector(state=>state.shopCertReducers);
    const dispatch = useDispatch();

    const images =[
        {name:'smallProduct01', src:small01,description:'smallProduct01',price:2000 },
        {name:'smallProduct02', src:small02,description:'smallProduct02',price:2000 },
        {name:'smallProduct03', src:small03,description:'smallProduct03',price:2000 },
        {name:'smallProduct04', src:small04,description:'smallProduct04',price:2000 },
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
            <Header>SmallProduct</Header>
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