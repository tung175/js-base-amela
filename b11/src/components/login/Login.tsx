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
import "./Login.scss";
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
} from "./styled";
import styled, { css } from "styled-components";
import bg from "../../assets/Rectangle1.png";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const CustomCheckbox = styled(Checkbox)`
    &.ant-checkbox-wrapper {
      .ant-checkbox-inner:hover {
        border-color: #7754f6; // Màu viền của checkbox
      }

      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #7754f6; // Màu khi checkbox được chọn
        border-color: #7754f6;
        padding: 10px;
      }

      .ant-checkbox-indeterminate .ant-checkbox-inner::after {
        background-color: #7754f6; // Màu khi checkbox ở trạng thái indeterminate
      }
      &:hover {
        .ant-checkbox-inner {
          border-color: #7754f6; // Đổi màu viền của ô checkbox khi hover
          opacity: 0.8;
          /* background-color: #7754F6; */
        }
      }
      &:hover.ant-checkbox-checked::after {
        background-color: #7754f6; // Màu khi checkbox được chọn
        border-color: #7754f6;
      }
      &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
        .ant-checkbox-checked:not(.ant-checkbox-disabled)
        .ant-checkbox-inner {
        background-color: #7754f6;
      }
    }
  `;
  const CustomBtnLogin = styled(Button)`
    &.ant-btn-primary {
      background-color: #7754f6 !important;
      width: 100%;
    }
    &.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
      opacity: 0.8;
    }
    padding: 23px 15px;
    line-height: 0px;
    font-weight: 700;
  `;
  const CustomInput = styled(Input)`
    &.ant-input-outlined:hover {
      border-color: #7754f6;
    }
    &.ant-input-outlined:focus,
    .ant-input-outlined:focus-within {
      border-color: #7754f6;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.04);
      outline: 0;
      background-color: #ffffff;
    }
    padding: 10px 15px;
    /* &.ant-input-outlined:hover{
    border: #7754f6;
  } */
  `;
  //   const CustomInputPassword = styled()`
  //   &.ant-input-outlined:hover {
  //     border-color: #7754f6;
  //   }
  // `;

  return (
    <>
      {/* <div className="login-container">
        <div className="container">
          <div className="row px-sm-0 px-3">
            <div className="content-left col-6"></div>
            <div className="content-right col-6">
              <div className="main-content-right d-flex flex-column py-3 mx-5 my-5 gap-5">
                <div className="img-camera text-center"></div>
                <i className="far fa-user i-username"></i>
                <input
                  type="text"
                  className="input username px-3 py-3 mx-5 mt-5"
                  placeholder="username"
                />
                <i className="fas fa-unlock-alt i-password"></i>
                <input
                  type="Password"
                  className="input password px-3 py-3 mx-5"
                  placeholder="password"
                />
                <span className="text-left">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </span>
                <button className="btn btn-login px-3 py-3 mx-4">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Row>
        <Col span={12}>
          <BackgroundContentRight></BackgroundContentRight>
        </Col>
        <Col span={12}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: "40vw" }}
          >
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Title>Login</Title>
              <DescLogin>Login your account in a seconds</DescLogin>
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              
            </Form.Item>
          </Form>
        </Col>
      </Row> */}
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
                  <CustomInput placeholder="Password" />
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
                  <Account href="#">Sign up</Account>
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
