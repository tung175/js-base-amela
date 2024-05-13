import {
  Breadcrumb,
  Form,
  Input,
  Layout,
  Select,
} from "antd";

import { useState } from "react";
import {
  CustomFooter,
  CustomNewTopic,
} from "../../styles/styled";
import styled from "styled-components";
type SizeType = Parameters<typeof Form>[0]["size"];
const {Content} = Layout;
const BtnAdd = styled.button`
  background: rgba(255, 255, 255, 1);
  padding: 15px 60px;
`;
const NewTopic = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <>
      <CustomNewTopic>
        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Test Manager</Breadcrumb.Item>
            <Breadcrumb.Item>New Topic</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              onValuesChange={onFormLayoutChange}
              size="large"
              // style={{ maxWidth: 600 }}
            >
              <Form.Item label="Topic Name">
                <Input />
              </Form.Item>
              <Form.Item label="Description">
                <Input />
              </Form.Item>
              <Form.Item label="Difficult">
                <Select style={{ width: 150 }}>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </CustomNewTopic>
      <CustomFooter style={{ textAlign: "center" }}>
        <BtnAdd>Add</BtnAdd>
      </CustomFooter>
    </>
  );
};

export default NewTopic;
