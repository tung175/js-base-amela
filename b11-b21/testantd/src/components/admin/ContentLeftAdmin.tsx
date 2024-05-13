import { useEffect, useState } from "react";
import { Col, message, Modal, type DrawerProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogoutRedux } from "../../redux/actions/UserAction";
import {
  CustomButtonFooter,
  CustomDrawer,
  CustomDrawerHeaderAdmin,
  NavigateAdmin,
  IconNavAdmin,
  CustomUserInfo,
  AtAdmin,
  CustomFooterAvt,
  CustomBtnLogout,
} from "../../styles/styled";
import IconUserManager from "../../assets/user-gear-solid 2.png";
import IconTestManager from "../../assets/circle-question-solid 1.png";
import IconQuiz from "../../assets/user-graduate-solid 1.png";
import avtAdmin from "../../assets/admin.png";
import Avatar from "react-avatar-edit";
import { useCheckMobileScreen } from "../../hooks/useCheckMobileScreen";
import { Profile } from "../../types/type.quiz";

interface IProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  onClose: () => void;
}

const ContentLeftAdmin = (props: IProps) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const user = useSelector((state: any) => state.user.userAcc);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [src, setSrc] = useState<string>("");
  const [profile, setProfile] = useState<Profile[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useCheckMobileScreen();
  const [updatedImage, setUpdatedImage] = useState<string>("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onCrop = (view: string) => {
    setPreview(view);
  };

  const saveCropImage = () => {
    if (preview) {
      setUpdatedImage(preview);
      setProfile([...profile, { preview }]);
    }
    setIsModalOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };
  const profileFinal = profile.map((item) => item.preview);
  const handleLogout = () => {
    dispatch(handleLogoutRedux());
  };
  // useEffect(() => {
  //   if (user && user.auth === false) {
  //     navigate("/login");
  //     message.success("logout success");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  return (
    <>
      {!isMobile ? (
        <Col span={0} md={5} style={{ background: "#d9d9d9" }}>
          <CustomUserInfo>
            <AtAdmin
              style={{
                backgroundImage: `url(${
                  // profileFinal.length ? profileFinal[0] : avtAdmin
                  updatedImage
                    ? updatedImage
                    : profileFinal.length
                    ? profileFinal[0]
                    : avtAdmin
                })`,
              }}
              onClick={() => showModal()}
            />
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
          <CustomDrawerHeaderAdmin
            style={{
              backgroundImage: `url(${
                updatedImage
                  ? updatedImage
                  : profileFinal.length
                  ? profileFinal[0]
                  : avtAdmin
              })`,
            }}
            onClick={() => showModal()}
          ></CustomDrawerHeaderAdmin>
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
        </CustomDrawer>
      )}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={saveCropImage}
        onCancel={handleCancel}
        closable={false}
      >
        <div>
          <Avatar
            width={465}
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
      </Modal>
    </>
  );
};

export default ContentLeftAdmin;
