import React, { useState } from "react";
import {
  Col,
  Divider,
  Form,
  Input,
  Radio,
  Row,
  Button,
  Checkbox,
  FormProps,
} from "antd";
import "../../styles/Login.scss";
import {
  BackgroundContentRight,
  Title,
  DescLogin,
  LinkAccount,
  Account,
  WithOutLogin,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  LoginWithOut,
  CustomInput,
  CustomCheckbox,
  CustomBtnLogin,
  CustomInputPassword,
} from "../../styles/styled";
import styled, { css } from "styled-components";
import bg from "../../assets/Rectangle1.png";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
  const history = useNavigate();

    const handleOnClickSignIn = (e: any) => {
        e.preventDefault();
        history('/register');
    }
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   // height: "100vh",
      // }}
      >
        <Row>
          <Col span={0} md={12}>
            <div style={{ width: "100%" }}>
              <BackgroundContentRight src={bg}></BackgroundContentRight>
            </div>
          </Col>
          <Col
            md={12}
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <Form
                name="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <Title>Login</Title>
                <DescLogin>Login your account in a seconds</DescLogin>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <CustomInput placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <CustomInputPassword placeholder="Password" />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <CustomCheckbox>
                      <span style={{ color: "#818181" }}>
                        Keep me logged in
                      </span>
                    </CustomCheckbox>
                  </Form.Item>
                  <Account style={{ float: "right" }} href="#">
                    Forgot password?
                  </Account>
                </Form.Item>
                <Form.Item>
                  <CustomBtnLogin type="primary" htmlType="submit">
                    Log in
                  </CustomBtnLogin>
                </Form.Item>
                <Form.Item>
                  <LinkAccount>Don't have an account? </LinkAccount>
                  <Account onClick={(e) => handleOnClickSignIn(e)}>Sign up</Account>
                </Form.Item>
                <Form.Item>
                  <LoginWithOut>
                    <span>Or continue with</span>
                  </LoginWithOut>
                </Form.Item>
                <Form.Item>
                  <WithOutLogin>
                    <Logo1></Logo1>
                    <Logo2></Logo2>
                    <Logo3></Logo3>
                    <Logo4></Logo4>
                  </WithOutLogin>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Login;
