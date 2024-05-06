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

import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg1.png";
import {
  BackgroundContentRight,
  CustomBtnLogin,
  CustomCheckbox,
  CustomInput,
  CustomInputPassword,
  FormInput,
  FormLogin,
  IconLogin,
  IconPassword,
  Logo,
} from "../../styles/styled";
const Login: React.FC = () => {
  const history = useNavigate();

  const handleOnClickSignIn = (e: any) => {
    e.preventDefault();
    history("/register");
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <BackgroundContentRight>
          <Row>
            <Col md={12} span={0}></Col>
            <Col
              md={12}
              span={24}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
              // style={{position: "relative"}}
              >
                
                <FormLogin>
                  <Logo />
                  <Form
                    name="ResgisterForm"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    style={{ maxWidth: "300px", margin: "0 auto" }}
                  >
                    <FormInput>
                    <IconLogin/>
                    <IconPassword/>
                      <Form>
                        <Form.Item
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Username!",
                            },
                          ]}
                        >
                        

                          <CustomInput placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Password!",
                            },
                          ]}
                        >
                          <CustomInputPassword
                            placeholder="Password"
                            value={"password"}
                          />
                        </Form.Item>
                      </Form>
                    </FormInput>
                    <Form.Item>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
                        <CustomCheckbox>
                          <span>Remember me</span>
                        </CustomCheckbox>
                      </Form.Item>
                    </Form.Item>
                    <Form.Item>
                      <CustomBtnLogin type="primary" htmlType="submit" style={{width: "100%"}}>
                        Login
                      </CustomBtnLogin>
                    </Form.Item>
                  </Form>
                </FormLogin>
              </div>
            </Col>
          </Row>
        </BackgroundContentRight>
      </div>
    </>
  );
};
export default Login;
