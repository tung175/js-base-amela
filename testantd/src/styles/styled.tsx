import styled from "styled-components";
import bg from "../assets/bg1.png";
import account from "../assets/image2.png";
import IPassword from "../assets/icon password.png";
import AvtAdmin from "../assets/admin.png";
import {
  Button,
  Checkbox,
  Col,
  Drawer,
  Input,
  Layout,
  Pagination,
  Row,
  Space,
} from "antd";
import logo from "../assets/logo.png";
import avt from "../assets/avata.png";
import { UnorderedListOutlined } from "@ant-design/icons";
import start from "../assets/star.png";
const { Header, Sider, Content, Footer } = Layout;
const { Search } = Input;
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

// export const CustomPageContainer = styled(PageContainer)`
//   background-color: #c4c4c4;
// `;

// export const CustomProLayout = styled(ProLayout)`
//   &.ant-pro-layout .ant-pro-sider .ant-layout-sider-children {
//     background: #D9D9D9;
//   }
// `;

export const CustomSider = styled(Sider)`
  &.ant-layout .ant-layout-sider-zero-width-trigger {
    top: 10px !important;
    left: 10px !important;
  }
`;

// export const CustomDrawer = styled(Drawer)`
//   &.ant-drawer .ant-drawer-header {
//     background-image: url(${avt});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     width: 30px;
//     height: 30px;
//     margin: 30px auto;
//     padding: 70px;
//   }
//   &.ant-drawer .ant-drawer-body {
//     padding: 0px 30px;
//   }
// `;

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0px 30px;
    background: #d9d9d9;
  }
  .ant-drawer-footer {
    background: #d9d9d9;
    display: flex;
    justify-content: center;
  }
`;
export const CustomDrawerHeader = styled.div`
  background-image: url(${avt});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  margin: 30px auto;
  padding: 70px;
`;

export const CustomDrawerContent = styled.div`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  text-align: left;
`;

export const CustomButtonFooter = styled.button`
  padding: 15px 40px;
  border: 1px solid #00000080;
  gap: 0px;
  border-radius: 4px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
`;

export const CustomDropdownSpace = styled(Space)`
  border: 1px solid;
  padding: 10px 10px;
  margin-top: 25px;
  float: right;
  display: flex;
  justify-content: space-between;
  width: 85%;
  background: #d9d9d9;
`;

export const CustomExamTitle = styled.div`
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.2px;
  text-align: left;
`;

export const CustomLayout = styled(Layout)`
  padding: 0px;
  background: #c4c4c4;
`;

export const CustomMainContent = styled.div`
  background: #ffff;
  min-height: 60vh;
  padding: 24px 70px;
  background: #d9d9d9;
  height: 80vh;

  /* border-radius: borderRadiusLG; */
`;

export const CustomContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CustomChildContent = styled.span`
  margin-top: 15px;
  /* text-align: justify; */
  display: flex;
  align-items: center;
`;

export const CustomImg = styled.img`
  margin-right: 10px;
`;

export const CustomRank = styled.div`
  background-image: url(${start});
  background-repeat: no-repeat;
  /* background-size: cover; */
  margin-top: 15px;
  width: 180px;
  height: 50px;
`;

export const CustomRowContent = styled(Col)`
  border: 1px solid;
  padding-right: 0px !important;
  margin-bottom: 40px;
`;

export const CustomRowMainContent = styled(Row)`
  display: flex;
  justify-content: space-around;
  background: #d9d9d9;
`;

export const CustomPaginate = styled(Pagination)`
  .ant-pagination-options {
    display: none;
  }
`;

export const CustomInputSearch = styled(Search)`
  .ant-input-group .ant-input {
    border-radius: 0px !important;
    background: #f3f1f1;
  }
  &.ant-input-group > .ant-input:first-child,
  .ant-input-group .ant-input-group-addon:first-child {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }
  &.ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    border-start-start-radius: 0;
    border-start-end-radius: 0px;
    border-end-end-radius: 0px;
    border-end-start-radius: 0;
    border-radius: 0px;
  }
`;

export const CustomFooter = styled(Footer)`
  background: #c4c4c4;
  height: 10vh;
  padding: 15px 50px;
`;

export const CustomFooterAvt = styled(CustomFooter)`
  background: #d9d9d9;
  display: flex;
  justify-content: center;
`;

export const CustomHeader = styled(Header)`
  background: #545151;
`;

export const CustomTitleHeader = styled.span`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  text-align: left;
  color: white;
`;

export const CustomUserInfo = styled.div`
  background: #d9d9d9;
  height: 85vh;
  padding: 20px;
`;

export const Avt = styled.div`
  background-image: url(${avt});
  background-repeat: no-repeat;
  background-size: cover;
  height: 80px;
  width: 80px;
  margin: 0px auto;
  margin-bottom: 10px;
  padding: 30px;
`;

export const BtnMobile = styled(UnorderedListOutlined)`
  position: absolute;
  top: 10px;
  left: 15px;
  background: #d9d9d9;
  width: 45px;
  font-size: 40px;
  border-radius: 4px;
`;

export const CustomBtnAdd = styled(CustomDropdownSpace)`
  padding: 5px;
  justify-content: space-evenly;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const CustomListUser = styled(CustomMainContent)`
  max-height: 65vh;
  height: 80vh;
  background: #c4c4c4;
  padding: 0px;
`;

export const AtAdmin = styled(Avt)`
  background-image: url(${AvtAdmin});
`;

export const CustomDrawerHeaderAdmin = styled(CustomDrawerHeader)`
  background-image: url(${AvtAdmin});
`;

export const CustomBtnLogout = styled.button`
  border-radius: 4px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  border: 1px solid #00000080;
  align-items: center;
  padding: 20px 50px;
  display: flex;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CustomIconAdd = styled.img`
  width: 35px;
  height: 25px;
`;

export const TotalAccount = styled.span`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ContentListUser = styled.div`
  display: flex;
  justify-content: space-between;
  background: #d9d9d9;
  padding: 20px;
  border: 1px solid;
  margin: 10px 0;
`;

export const NavigateAdmin = styled.div`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0;
  text-align: center;
  display: flex;
  justify-content: left;
  align-items: baseline;
`;

export const IconNavAdmin = styled.img`
  margin-right: 10px;
  /* float: left; */
`;

export const CustomNewTopic = styled(CustomMainContent)`
  min-height: 65vh;
  height: 90vh;
  background: #c4c4c4;
  padding: 0px;
`;

export const AvatarUser = styled.img`
  /* height: 80px;
  width: 80px;
  margin: 0px auto;
  margin-bottom: 10px;
  padding: 30px;
  width: "200px", */
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0px auto;
  margin-bottom: 10px;
  padding: 30px;
`;
