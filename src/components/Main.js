import React from "react";
import { Row, Col ,Input,Tabs,Form} from "antd";
import Dropdown from "./Dropdown"
const MainComponent = ()=>{
    const TabPane = Tabs.TabPane;
    return (
        <React.Fragment>
        <Row>
        <Col span={2}>
        </Col>
        <Col span={6}>

        <Tabs  type="card">
            <TabPane tab="Tab 1" key="1">
                <Form>
                <Form.Item label="Source">
                    <Dropdown/>
                </Form.Item>
                
                </Form>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Col>
 
          
          
        </Row>
      </React.Fragment>
    )
} 


export default MainComponent;
