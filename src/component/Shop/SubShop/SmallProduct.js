import React, {useState} from 'react';
import { 
    Layout,
    Card,
    Col,
    Row,
    Modal
} from 'antd';

import small01 from '../../../resources/small01.png';
import small02 from '../../../resources/small02.png';
import small03 from '../../../resources/small03.png';
import small04 from '../../../resources/small04.png';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

export const SmallProduct =()=>{
    const [showModal,setShowModal] = useState(false);
    const [selectedName,setSelectedName]=useState('');
    const [selectedDescription,setSelectedDescription]=useState('');
    const [selectedPrice,setSelectedPrice]=useState();
    const images =[
        {name:'smallProduct01', src:small01,description:'smallProduct01',price:2000 },
        {name:'smallProduct02', src:small02,description:'smallProduct02',price:2000 },
        {name:'smallProduct03', src:small03,description:'smallProduct03',price:2000 },
        {name:'smallProduct04', src:small04,description:'smallProduct04',price:2000 },
    ]
    return(
        <>
            <Header>SmallProduct</Header>
            <Content style={{display:'flex',padding:'20px'}}>
                <Row>
                    {images.map((item,index)=>(
                        <Col span={8}>
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
                        onOk={()=>setShowModal(false)}   
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