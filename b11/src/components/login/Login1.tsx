import { Row, Col, Form, Input, Button } from 'antd';
import styled from 'styled-components';
import bg from "../../assets/Rectangle1.png"
const StyledRow = styled(Row)`
  height: 100vh;
`;

const ImageContainer = styled(Col)`
 background: url(${bg});
  background-size: cover;
  background-position: center;
`;

const FormContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login1= () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  return (
    <StyledRow>
      <ImageContainer xs={24} sm={12} md={10} lg={8} xl={6}>
        {/* Ảnh đăng nhập */}
      </ImageContainer>
      <FormContainer xs={24} sm={12} md={14} lg={16} xl={18}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </FormContainer>
    </StyledRow>
  );
};

export default Login1;