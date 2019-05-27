import React from "react";
import { Row, Col } from "antd";
import { Tabs } from "antd";
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
                <Dropdown/>
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
