import React from 'react';
import { 
    Layout,
    Card,
    Col,
    Row
} from 'antd';
import big01 from '../../../resources/Big01.png';
import big02 from '../../../resources/Big02.png';
import big03 from '../../../resources/Big03.png';
import big04 from '../../../resources/Big04.png';
import big05 from '../../../resources/Big05.png';
import big06 from '../../../resources/Big06.png';
import big07 from '../../../resources/Big07.png';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

export const BigProduct =()=>{
    const images =[
        {name:'bigProduct01', src:big01,description:'bigProduct01',price:9999 },
        {name:'bigProduct02', src:big02,description:'bigProduct02',price:9999 },
        {name:'bigProduct03', src:big03,description:'bigProduct03',price:9999 },
        {name:'bigProduct04', src:big04,description:'bigProduct04',price:9999 },
        {name:'bigProduct05', src:big05,description:'bigProduct05',price:9999 },
        {name:'bigProduct06', src:big06,description:'bigProduct06',price:9999 },
        {name:'bigProduct07', src:big07,description:'bigProduct07',price:9999 },
    ]
    return(
        <>
            <Header>BigProduct</Header>
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