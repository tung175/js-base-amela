import styled from "styled-components";
import img from "../../assets/Rectangle1.png";
import logoG from "../assets/Google.png";
import logoF from "../assets/Facebook.png";
import logoT from "../assets/Twitter.png";
import logoI from "../assets/Instagram.png";
import { Button, Checkbox, Input } from "antd";

export const BackgroundContentRight = styled.img`
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3em;
  font-family: Inter;
`;

export const DescLogin = styled.p`
  color: #818181;
  font-size: 1em;
`;

export const Account = styled.a`
  color: #7754f6;
  text-decoration: none;
  &:hover {
    color: #7754f6;
    opacity: 0.8;
  }
`;

export const LinkAccount = styled.p`
  color: #818181;
  display: inline;
`;

export const WithOutLogin = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  cursor: pointer;
`;

export const Logo1 = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 5px;
  background: url(${logoG}) no-repeat;
`;

export const Logo2 = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 5px;

  background: url(${logoF}) no-repeat;
`;

export const Logo3 = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 5px;

  background: url(${logoI}) no-repeat;
`;

export const Logo4 = styled.div`
  height: 65px;
  width: 100%;
  padding: 0 5px;

  background: url(${logoT}) no-repeat;
`;

export const LoginWithOut = styled.h6`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #818181;
  line-height: 0.1em;
  margin: 10px 0 20px;
  color: #818181;
  span {
    background: #fff;
    padding: 0 10px;
  }
`;

export const CustomCheckbox = styled(Checkbox)`
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

export const CustomBtnLogin = styled(Button)`
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

export const CustomInput = styled(Input)`
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

export const CustomInputPassword = styled(Input.Password)`
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
&.ant-input-outlined:focus-within{
  border-color: #7754f6;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.04);

}
padding: 10px 15px;
/* &.ant-input-outlined:hover{
border: #7754f6;
} */
`;