import {
  Breadcrumb,
  Checkbox,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Select,
} from "antd";

import { useState } from "react";
// type SizeType = Parameters<typeof Form>[0]["size"];
const {Content} = Layout;
const NewTest = () => {
  // const [componentSize, setComponentSize] = useState<SizeType | "default">(
  //   "default"
  // );

  // const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  //   setComponentSize(size);
  // };
  return (
    <>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Test Manager</Breadcrumb.Item>
          <Breadcrumb.Item>New test</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Row>
              <Col span={24} sm={24} style={{paddingLeft: "12px", paddingRight: "12px"}}>
                <Form.Item label="Test Name:">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12} sm={12} style={{paddingLeft: "12px", paddingRight: "12px"}}>
                <Form.Item label="Time:">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12} sm={12} style={{paddingLeft: "12px", paddingRight: "12px"}}>
                <Form.Item label="Độ khó">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12} sm={12} style={{paddingLeft: "12px", paddingRight: "12px"}}>
                <Form.Item label="Nhóm câu hỏi">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12} sm={12} style={{paddingLeft: "12px", paddingRight: "12px"}}>
                <Checkbox style={{ lineHeight: "32px" }}>A</Checkbox>
              </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default NewTest;
