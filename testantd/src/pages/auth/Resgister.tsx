import React, { useState } from "react";
// import {
//   Col,
//   Form,
//   Input,
//   Row,
//   Button,
//   Checkbox,
// } from "antd";
// import "../../styles/Login.scss";
// import {
//   BackgroundContentRight,
//   Title,
//   DescLogin,
//   LinkAccount,
//   Account,
//   WithOutLogin,
//   Logo1,
//   Logo2,
//   Logo3,
//   Logo4,
//   LoginWithOut,
//   CustomCheckbox,
//   CustomBtnLogin,
//   CustomInput,
//   CustomInputPassword,
// } from "../../styles/styled";
// import styled, { css } from "styled-components";
// import bg from "../../assets/Rectangle1.png";
// import { useNavigate } from "react-router-dom";

const Resgister: React.FC = () => {
  //   const history = useNavigate();
  //   const handleOnClickLogin= (e: any) => {
  //       e.preventDefault();
  //       history('/login');
  //   }
  // const onFinish = (values: any) => {
  //   console.log("Received values of form: ", values);
  // };

  return (
    <>
      
      {/* <div
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
                name="ResgisterForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ maxWidth: "300px", margin: "0 auto" }}
              >
                <Title>Sign in</Title>
                <DescLogin>Create your account in a seconds</DescLogin>
                <Form.Item
                  name="firstName"
                  rules={[
                    { required: true, message: "Please input your First Name!" },
                  ]}
                >
                  <CustomInput placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your Last Name!" },
                  ]}
                >
                  <CustomInput placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  name="emailAddress"
                  rules={[
                    { required: true, message: "Please input your Email address!" },
                  ]}
                >
                  <CustomInput placeholder="Email address" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <CustomInputPassword placeholder="Password" value={'password'}/>
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <CustomCheckbox>
                      <span style={{ color: "#818181" }}>
                      I agree to the terms and privacy policy
                      </span>
                    </CustomCheckbox>
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <CustomBtnLogin type="primary" htmlType="submit">
                  Create An Account
                  </CustomBtnLogin>
                </Form.Item>
                <Form.Item>
                  <LinkAccount>Already a member? </LinkAccount>
                  <Account onClick={(e) => handleOnClickLogin(e)}>Login</Account>
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
      </div> */}
    </>
  );
};
export default Resgister;
