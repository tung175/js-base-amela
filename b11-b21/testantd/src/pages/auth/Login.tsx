/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Form, Row, message } from "antd";
import "../../styles/Login.scss";
import { useNavigate } from "react-router-dom";
import {
  BackgroundContentRight,
  ContainInput,
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
// import { login } from "../../redux/actions/UserAction";
import { handleLoginRedux } from "../../redux/actions/UserAction";
import { t } from "i18next";
import account from "../../assets/personal.svg";
import passwordI from "../../assets/password.svg";
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
  const handleRememberMeChange = (e: any) => {
    setRememberMe(e.target.checked);
  };

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
    const { remember } = values;
    if (!username || !password) {
      message.error("Username or Password not empty");
      return;
    }
    if (rememberMe) {
      localStorage.setItem(
        "rememberMeData",
        JSON.stringify({ username, password, rememberMe })
      );
    } else {
      localStorage.removeItem("rememberMeData");
    }
    dispatch(handleLoginRedux(username, password, remember));
    // dispatch(login(username, password, rememberMe, 1));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    const errors = errorInfo.errorFields;
    const errorMessages = errors.map((error: any) => error.errors[0]);
    const errorMessage = errorMessages.join(", ");
    message.error(`Validation failed: ${errorMessage}`);
  };

  useEffect(() => {
    // Nếu thông tin đăng nhập được lưu, điền tự động vào form
    const savedData = JSON.parse(
      localStorage.getItem("rememberMeData") || "{}"
    );
    console.log(22222, savedData);

    if (savedData.username && savedData.password && savedData.rememberMe) {
      setUsername(savedData.username);
      setPassword(savedData.password);
      setRememberMe(savedData.rememberMe);
    }
  }, []);

  return (
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
          <FormLogin>
            <Logo />
            <Form
              name="LoginForm"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ maxWidth: "300px", margin: "0 auto" }}
            >
              <FormInput>
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
                    <ContainInput>
                      <IconLogin src={account} alt="" />
                      <CustomInput
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder={t("Username")}
                        value={username}
                      />
                    </ContainInput>
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                      {
                        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$/,
                        message: "Password is not in correct format",
                      },
                    ]}
                  >
                    <ContainInput>
                      <IconPassword src={passwordI} alt="" />
                      <CustomInputPassword
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handlePressEnter(event)}
                        placeholder="Password"
                        value={password}
                      />
                    </ContainInput>
                  </Form.Item>
                </Form>
              </FormInput>
              <Form.Item noStyle>
                <CustomCheckbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                >
                  <span>Remember me</span>
                </CustomCheckbox>
              </Form.Item>
              <Form.Item>
                <CustomBtnLogin
                  type="primary"
                  htmlType="submit"
                  // onClick={() => handleLogin()}
                >
                  Login
                </CustomBtnLogin>
              </Form.Item>
            </Form>
          </FormLogin>
        </Col>
      </Row>
    </BackgroundContentRight>
  );
};
export default Login;
