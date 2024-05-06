import styled from "styled-components";
import bg from "../assets/bg1.png";
import account from "../assets/image2.png";
import IPassword from "../assets/icon password.png";
import { Button, Checkbox, Input } from "antd";
import logo from "../assets/logo.png";
export const BackgroundContentRight = styled.div`
  background-image: url(${bg});
  /* Full height */
  height: 100vh;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 3px solid #fbbc1a;
  height: 100px;
  background-color: #999595;
  width: 100px;
  border-radius: 88px;
  position: absolute;
  top: -50px;
  left: 130px;
`;

export const FormLogin = styled.div`
  padding-top: 80px;
  margin: 6.9rem auto;
  border: 3px solid #fbbc1a;
  background-color: #999595;
  height: 430px;
  width: 380px;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
`;

export const IconLogin = styled.div`
  background: url(${account});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 64px;
  width: 71px;
`;

export const IconPassword = styled(IconLogin)`
  background: url(${IPassword}) no-repeat;
  position: absolute;
  top: 168px;
  left: 48px;
  background-color: #f9f6f6;
`;

export const FormInput = styled.div`
  display: flex;
`;
// export const Title = styled.h1`
//   font-weight: 600;
//   font-size: 3em;
//   font-family: Inter;
// `;

// export const DescLogin = styled.p`
//   color: #818181;
//   font-size: 1em;
// `;

// export const Account = styled.a`
//   color: #7754f6;
//   text-decoration: none;
//   &:hover {
//     color: #7754f6;
//     opacity: 0.8;
//   }
// `;

// export const LinkAccount = styled.p`
//   color: #818181;
//   display: inline;
// `;

// export const WithOutLogin = styled.div`
//   display: flex;
//   height: 10vh;
//   width: 100%;
//   cursor: pointer;
// `;

// export const Logo1 = styled.div`
//   height: 65px;
//   width: 100%;
//   padding: 0 5px;
//   background: url(${logoG}) no-repeat;
// `;

// export const Logo2 = styled.div`
//   height: 65px;
//   width: 100%;
//   padding: 0 5px;

//   background: url(${logoF}) no-repeat;
// `;

// export const Logo3 = styled.div`
//   height: 65px;
//   width: 100%;
//   padding: 0 5px;

//   background: url(${logoI}) no-repeat;
// `;

// export const Logo4 = styled.div`
//   height: 65px;
//   width: 100%;
//   padding: 0 5px;

//   background: url(${logoT}) no-repeat;
// `;

// export const LoginWithOut = styled.h6`
//   width: 100%;
//   text-align: center;
//   border-bottom: 1px solid #818181;
//   line-height: 0.1em;
//   margin: 10px 0 20px;
//   color: #818181;
//   span {
//     background: #fff;
//     padding: 0 10px;
//   }
// `;

export const CustomCheckbox = styled(Checkbox)`
&.ant-checkbox-wrapper {
  .ant-checkbox-inner:hover {
    border-color: #d9d9d9; // Màu viền của checkbox
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #d9d9d9; // Màu khi checkbox được chọn
    border-color: #d9d9d9;
    padding: 10px;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: #d9d9d9; // Màu khi checkbox ở trạng thái indeterminate
  }
  &:hover {
    .ant-checkbox-inner {
      border-color: #d9d9d9; // Đổi màu viền của ô checkbox khi hover
      opacity: 0.8;
      /* background-color: #d9d9d9; */
    }
  }
  &:hover.ant-checkbox-checked::after {
    background-color: #d9d9d9; // Màu khi checkbox được chọn
    border-color: #d9d9d9;
  }
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: #d9d9d9;
  }
}
`;

export const CustomBtnLogin = styled(Button)`
  &.ant-btn-primary {
    background-color: #d9d9d9 !important;
    width: 100%;
  }
  &.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
    opacity: 0.8;
    color: #000000;
  }
  padding: 23px 15px;
  line-height: 0px;
  color: #000000;

  /* font-weight: 700; */
`;

export const CustomInput = styled(Input)`
  &.ant-input-outlined:hover {
    border-color: #f9f6f6;
  }
  &.ant-input-outlined:focus,
  .ant-input-outlined:focus-within {
    border-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.04);
    outline: 0;
    background-color: #ffffff;
  }
  padding: 20px 15px;
  &.ant-input {
    border-radius: 0px;
  }
`;

export const CustomInputPassword = styled(Input.Password)`
  &.ant-input-outlined:hover {
    /* border-color: #ffffff; */
  }
  &.ant-input-outlined:focus,
  .ant-input-outlined:focus-within {
    /* border-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.04);
    outline: 0;
    background-color: #ffffff; */
  }
  &.ant-input-outlined:focus-within {
    /* border-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.04); */
  }
  &.ant-input-affix-wrapper {
    border-radius: 0px;
  }
  padding: 20px 15px;
`;
