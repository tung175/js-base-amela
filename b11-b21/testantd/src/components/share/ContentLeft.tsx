/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Modal,
  Radio,
  RadioChangeEvent,
  type DrawerProps,
} from "antd";
import {
  Avt,
  CustomBtnLogout,
  CustomButtonFooter,
  CustomDrawer,
  CustomDrawerContent,
  CustomDrawerHeader,
  CustomFooterAvt,
  CustomUserInfo,
} from "../../styles/styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleLogoutRedux,
  updateUserEmail,
} from "../../redux/actions/UserAction";
import avt from "../../assets/avata.png";
import { useCheckMobileScreen } from "../../hooks/useCheckMobileScreen";
import { Profile } from "../../types/type.quiz";
import Avatar from "react-avatar-edit";
import { t } from "i18next";
import { FormProps } from "antd/lib";
// import { CustomDrawer } from "../../styles/styled";
interface IProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  onClose: () => void;
}

const ContentLeft = (props: IProps) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const [image, setImage] = useState<string>("");
  const [src, setSrc] = useState<string>("");
  const [profile, setProfile] = useState<Profile[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedImage, setUpdatedImage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const userEmail = useSelector((state: any) => state?.user?.email);
  const [email, setEmail] = useState(userEmail);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});
  const ref = useRef<HTMLElement>(null);
  const history = useNavigate();

  const isMobile = useCheckMobileScreen();

  const onCrop = (view: string) => {
    setPreview(view);
  };

  // const saveEmail = () => {
  //   dispatch(updateUserEmail(email));
  //   // handleCloseModal();
  // };

  // const saveCropImage = () => {
  //   if (preview) {
  //     setUpdatedImage(preview);
  //     setProfile([...profile, { preview }]);
  //   }
  //   // saveEmail()
  //   setIsModalOpen(false);
  // };

  const profileFinal = profile.map((item) => item.preview);
  const user = useSelector((state: any) => state.user.userAcc);
  const dispatch = useDispatch<any>();

  // const newEmail = {
  //   ...useSelector((state: any) => state.user.userAcc),
  // };
  const handleLogout = () => {
    dispatch(handleLogoutRedux());
    history("/login");
    message.success("logout success");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish: FormProps["onFinish"] = (values: any) => {
    const { email } = values;
    if (preview) {
      setUpdatedImage(preview);
      setProfile([...profile, { preview }]);
    }
    dispatch(updateUserEmail(email));
    setIsModalOpen(false);
  };
  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    if (ref.current) {
      ref.current.click();
    }
    // onFinish(formData);
  };
  useEffect(() => {
    // onFinish()
    setEmail(user?.email);
  }, [user]);
  console.log(user);
  return (
    <>
      {!isMobile ? (
        <Col span={0} md={5} style={{ background: "#d9d9d9" }}>
          <CustomUserInfo>
            <Avt
              style={{
                backgroundImage: `url(${
                  updatedImage
                    ? updatedImage
                    : profileFinal.length
                    ? profileFinal[0]
                    : avt
                })`,
              }}
              onClick={() => showModal()}
            />
            {user && user?.email && (
              <>
                <CustomDrawerContent>User: {user.email}</CustomDrawerContent>
                <CustomDrawerContent>Point: 100</CustomDrawerContent>
              </>
            )}
          </CustomUserInfo>
          <CustomFooterAvt>
            <CustomBtnLogout onClick={() => handleLogout()}>
              LOGOUT
            </CustomBtnLogout>
          </CustomFooterAvt>
        </Col>
      ) : (
        <CustomDrawer
          width={"60vw"}
          placement={placement}
          closable={false}
          onClose={props.onClose}
          open={props.open}
          key={placement}
          // headerStyle={{ backgroundImage: `url(${avt})` }}
          footer={
            <CustomButtonFooter onClick={() => handleLogout()}>
              LOGOUT
            </CustomButtonFooter>
          }
        >
          <CustomDrawerHeader
            style={{
              backgroundImage: `url(${
                updatedImage
                  ? updatedImage
                  : profileFinal.length
                  ? profileFinal[0]
                  : avt
              })`,
            }}
            onClick={() => showModal()}
          ></CustomDrawerHeader>

          {user && user?.email && (
            <>
              <CustomDrawerContent>User: {user?.email}</CustomDrawerContent>
              <CustomDrawerContent>Point: 100</CustomDrawerContent>
            </>
          )}
        </CustomDrawer>
      )}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
      >
        <Form
          form={form}
          labelCol={{ span: 8 }}
          style={{ maxWidth: "100%" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onValuesChange={(changedValues, allValues) => {
            // Cập nhật giá trị email trong state khi có sự thay đổi
            if ("email" in changedValues) {
              setEmail(changedValues.email);
            }
          }}
        >
          <div>
            <Avatar
              width={100}
              height={400}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
            />
            <div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(event) => {
                    const file = event.target.files
                      ? event.target.files[0]
                      : null;
                    if (file && file.type.substring(0, 5) === "image") {
                      setImage(URL.createObjectURL(file));
                    } else {
                      setImage("");
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            initialValue={user?.username}
          >
            <Input placeholder={t("username")} name="username" disabled />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Enter a valid email address!",
              },
            ]}
            initialValue={user?.email}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button ref={ref} htmlType="submit" style={{ display: "none" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ContentLeft;
