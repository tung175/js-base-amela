import React, { useEffect, useState } from "react";
import type { DrawerProps, PaginationProps, RadioChangeEvent } from "antd";
import {
  CaretDownOutlined,
  DownOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Col,
  Drawer,
  Layout,
  Menu,
  Radio,
  Row,
  Space,
  theme,
  Input,
  Dropdown,
  message,
  Pagination,
  Modal,
} from "antd";
import { SearchProps } from "antd/es/input";
import styled from "styled-components";
import { MenuProps } from "antd/lib";
import ContentLeft from "./ContentLeftAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogoutRedux } from "../../../redux/actions/UserAction";
import {
  AtAdmin,
  Avt,
  BtnMobile,
  ContentListUser,
  CustomBtnAdd,
  CustomBtnLogout,
  CustomChildContent,
  CustomContent,
  CustomDrawerContent,
  CustomDropdownSpace,
  CustomExamTitle,
  CustomFooter,
  CustomFooterAvt,
  CustomHeader,
  CustomIconAdd,
  CustomImg,
  CustomInputSearch,
  CustomLayout,
  CustomListUser,
  CustomMainContent,
  CustomPaginate,
  CustomRank,
  CustomRowContent,
  CustomRowMainContent,
  CustomTitleHeader,
  CustomUserInfo,
  IconNavAdmin,
  NavigateAdmin,
  TotalAccount,
  AvatarUser
} from "../../../styles/styled";
import IconUserManager from "../../../assets/user-gear-solid 2.png";
import IconTestManager from "../../../assets/circle-question-solid 1.png";
import IconQuiz from "../../../assets/user-graduate-solid 1.png";
import ContentLeftAdmin from "./ContentLeftAdmin";
import UserManager from "../UserManager";
import ManageQuiz from "../ManageQuiz";
import NewTest from "../NewTest";
import NewTopic from "../NewTopic";
import ManageQuestion from "../ManageQuestion";
import EditAvatar from "../../share/modal/EditAvatar";
import Avatar from "react-avatar-edit";
import avtAdmin from "../../../assets/admin.png";

// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};
interface Profile {
  pview: string;
}

const ContentRightAdmin: React.FC = () => {
  const [imagecrop, setimagecrop] = useState<boolean>(false);
  const [image, setimage] = useState<string>("");
  const [src, setsrc] = useState<string>("");
  const [profile, setprofile] = useState<Profile[]>([]);
  const [pview, setpview] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onCloseAvt = () => {
    setpview(null);
  };

  const onCrop = (view: string) => {
    setpview(view);
  };

  const saveCropImage = () => {
    if (pview) {
      setprofile([...profile, { pview }]);
    }
    setIsModalOpen(false)
  };

  const profileFinal = profile.map((item) => item.pview);
  const user = useSelector((state: any) => state.user.userAcc);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(handleLogoutRedux());
  };
  // useEffect(() => {
  //   if (user && user.auth === false) {
  //     navigate("/login");
  //     message.success("logout success");
  //   }
  // }, [user]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Row>
        <Col span={0} md={5} style={{ background: "#d9d9d9" }}>
          <CustomUserInfo>
            <AtAdmin
              style={{
                backgroundImage: `url(${profileFinal.length ? profileFinal[0] : avtAdmin})`
              }}
              onClick={() => showModal()}
              // src={profileFinal.length ? profileFinal[0] : avtAdmin}
            />
            {/* <Avatar
                width={300}
                height={300}
                onCrop={onCrop}
                onClose={onCloseAva}
                onBeforeFileLoad={onBeforeFileLoad}
                // src={null}
              /> */}

            <NavigateAdmin>
              <IconNavAdmin src={IconUserManager} />
              <span>User Manager</span>
            </NavigateAdmin>
            <NavigateAdmin>
              <IconNavAdmin src={IconTestManager} />
              Test Manager
            </NavigateAdmin>
            <NavigateAdmin>
              <IconNavAdmin src={IconQuiz} />
              Test Quiz
            </NavigateAdmin>
          </CustomUserInfo>
          <CustomFooterAvt>
            <CustomBtnLogout onClick={() => handleLogout()}>
              LOGOUT
            </CustomBtnLogout>
          </CustomFooterAvt>
        </Col>
        <Col span={24} md={19}>
          <CustomLayout>
            <Row>
              <Col span={24} md={0}>
                <CustomHeader style={{ textAlign: "center" }}>
                  <Space>
                    <div onClick={showDrawer}>
                      <BtnMobile />
                    </div>
                  </Space>
                  <ContentLeftAdmin
                    setOpen={setOpen}
                    open={open}
                    onClose={onClose}
                  />
                  <CustomTitleHeader>User Manager</CustomTitleHeader>
                </CustomHeader>
              </Col>
            </Row>
            {/* <UserManager/> */}
            {/* <ManageQuiz/> */}
            {/* <NewTest/> */}
            {/* <NewTopic/> */}
            {/* <ManageQuestion /> */}
            {/* <EditAvatar /> */}
          </CustomLayout>
        </Col>
      </Row>
      {/* <EditAvatar
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
      /> */}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={saveCropImage}
        onCancel={handleCancel}
      >
        <div>
          <Avatar
            width={500}
            height={400}
            onCrop={onCrop}
            onClose={onClose}
            src={src}
            // shadingColor={"#474649"}
            // backgroundColor={"#474649"}
          />
          <div>
            <div >
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(event) => {
                  const file = event.target.files ? event.target.files[0] : null;
                  if (file && file.type.substring(0, 5) === "image") {
                    setimage(URL.createObjectURL(file));
                  } else {
                    setimage("");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContentRightAdmin;
