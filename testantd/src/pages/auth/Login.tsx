import React, { useEffect, useState } from "react";
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
  message,
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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { login } from "../../redux/actions/UserAction";
import { handleLoginRedux } from "../../redux/actions/UserAction";
import { t } from "i18next";

interface IStateRedux {
  userAcc: {
    username: string;
    auth: boolean;
    token: string;
  };
  isLoading: boolean;
  isError: boolean;
}
const Login: React.FC = () => {
  const history = useNavigate();
  const dispatch = useDispatch<any>();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const userAcc: any = useSelector((state: any) => state?.user?.userAcc);

  // const handleLogin = async () => {
  //   if (!username || !password) {
  //     message.error("Username or Password not empty");
  //     return
  //   }
  //   dispatch(handleLoginRedux(username, password, 1));
  // };

  const handlePressEnter = (event: any) => {
    if (event.key === "Enter") {
      // handleLogin();
      // onFinish(values: any)
    }
  };

  useEffect(() => {
    if (userAcc && userAcc.auth === true) {
      history("/dashboard");
    }
  }, [userAcc]);

  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  //   setPassword(e.target.value);
  //   // Kiểm tra xem mật khẩu có ít nhất một chữ và một số và có ít hơn hoặc bằng 8 kí tự không
  //   const isValid = /^(?=.*[A-Za-z])(?=.*\d).{1,8}$/.test(e.target.value);
  //   setValid(isValid);
  //   if (!isValid) {
  //     message.error('Mật khẩu phải chứa cả chữ và số và có ít hơn hoặc bằng 8 ký tự.');
  //   }
  // };
  const onFinish = (values: any) => {
    const {remember } = values;
    if (!username || !password) {
      message.error("Username or Password not empty");
      return;
    }
    dispatch(handleLoginRedux(username, password, remember, 1));
    // dispatch(login(username, password, rememberMe, 1));
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
                    name="LoginForm"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    style={{ maxWidth: "300px", margin: "0 auto" }}
                  >
                    <FormInput>
                      <IconLogin />
                      <IconPassword />
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
                          <CustomInput
                            onChange={(event) =>
                              setUsername(event.target.value)
                            }
                            placeholder={t("Username")}
                          />
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
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                            onKeyDown={(event) => handlePressEnter(event)}
                            placeholder="Password"
                            value={"password"}
                          />
                        </Form.Item>
                      </Form>
                    </FormInput>
                    <Form.Item>
                      <Form.Item
                        name="rememberMe"
                        valuePropName="checked"
                        noStyle
                      >
                        <CustomCheckbox
                          // onChange={(e) => setRememberMe(e.target.checked)}
                        >
                          <span>Remember me</span>
                        </CustomCheckbox>
                      </Form.Item>
                    </Form.Item>
                    <Form.Item>
                      <CustomBtnLogin
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%" }}
                        // onClick={() => handleLogin()}
                      >
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
