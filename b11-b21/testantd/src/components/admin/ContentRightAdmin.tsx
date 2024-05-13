import { useState } from "react";
import { Col, Row, Space } from "antd";
import {
  AtAdmin,
  BtnMobile,
  CustomBtnLogout,
  CustomFooterAvt,
  CustomHeader,
  CustomLayout,
  CustomTitleHeader,
  CustomUserInfo,
  IconNavAdmin,
  NavigateAdmin,
} from "../../styles/styled";
import ContentLeftAdmin from "./ContentLeftAdmin";
import UserManager from "./UserManager";
import ManageQuiz from "./ManageQuiz";
import NewTest from "./NewTest";
import NewTopic from "./NewTopic";
import ManageQuestion from "./ManageQuestion";
import EditAvatar from "../share/modal/EditAvatar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { User, users } from "../../data/contants";

interface IProps {
  showDrawer: () => void;
}

const ContentRightAdmin = (props: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  // const user = useSelector((state: any) => state.user.userAcc);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user && user.auth === false) {
  //     navigate("/login");
  //     message.success("logout success");
  //   }
  // }, [user]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Col span={24} md={19}>
        <CustomLayout>
          <Row>
            <Col span={24} md={0}>
              <CustomHeader style={{ textAlign: "center" }}>
                <Space>
                  <div onClick={props.showDrawer}>
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
          <UserManager />
          {/* <ManageQuiz/> */}
          {/* <NewTest/> */}
          {/* <NewTopic/> */}
          {/* <ManageQuestion /> */}
          {/* <EditAvatar /> */}
        </CustomLayout>
      </Col>
    </>
  );
};

export default ContentRightAdmin;
