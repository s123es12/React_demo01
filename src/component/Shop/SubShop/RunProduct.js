import React from 'react';
import { 
    Layout,
    Card,
    Col,
    Row
} from 'antd';

import big08 from '../../../resources/Big08.png';
import big09 from '../../../resources/Big09.png';
import big10 from '../../../resources/Big10.png';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

export const RunProduct =()=>{
    const images =[
        {name:'runProduct01', src:big08,description:'runProduct01',price:5000 },
        {name:'runProduct02', src:big09,description:'runProduct02',price:5000 },
        {name:'runProduct03', src:big10,description:'runProduct03',price:5000 },
    ]
    return(
        <>
            <Header>RunProduct</Header>
            <Content style={{display:'flex',padding:'20px'}}>
                <Row>
                    {images.map((item,index)=>(
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ margin:'20px'}}
                                cover={<img alt="example" src={item.src} />}
                            >
                                <Meta 
                                    title={item.name} 
                                    description={item.description}
                                />
                                <h1>${item.price}</h1>
                            </Card>
                        </Col>
                    ))}

                </Row>

                
            </Content>
            
        </>
    )
}