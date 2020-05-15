import React from 'react';
import {
    List,
    Button,
    Input
} from 'antd';

import './Cert.less'

export const Cert =()=>{
    const data = [
        {
            title: 'Ant Design Title 1',
        }
    ];
    return(
        <>
          <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
            <List.Item>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <Button>Delete</Button>
                <Button shape="circle">+</Button>
                <Input min={1}  defaultValue={1} style={{width:'50px'}}/>
                <Button shape="circle">-</Button>
            </List.Item>
            )}
            />
            <div style={{textAlign:'center'}}>
              <Button type="primary" size="large" style={{margin:'20px'}}>payment</Button>
              <Button type="primary" size="large"style={{margin:'20px'}}>Clear Cert</Button>
            </div>
            
        </>
    )
}