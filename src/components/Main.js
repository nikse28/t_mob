import React from "react";
import { Row, Col, Input, Tabs, Form } from "antd";
import Dropdown from "./Dropdown";
import Combine from "./Combine"
const MainComponent = () => {
  const TabPane = Tabs.TabPane;
  const { TextArea } = Input;

  return (
    <React.Fragment>
      <Row>
        <Col span={2} />
        <Col span={6}>
          <Tabs type="card">
            <TabPane tab="Tab 1" key="1">
              <Form >
                <Row>
                  <Col span={6}>
                    <Form.Item label="Source">
                    <Combine/>        
                    </Form.Item>
                  </Col>
                  <Col span={6} push={6}>
                    <Form.Item label="Record Type">
                      {/* <Dropdown /> */}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  Notes:
                  <TextArea rows={4} />
                </Row>
                <button type="submit"> Add  </button>
              </Form>
            </TabPane>

            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MainComponent;
