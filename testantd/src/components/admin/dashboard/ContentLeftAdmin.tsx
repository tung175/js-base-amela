import React, { useEffect, useState } from "react";
import {message, Modal, type DrawerProps, type RadioChangeEvent } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleLogoutRedux } from "../../../redux/actions/UserAction";
import {
  CustomButtonFooter,
  CustomDrawer,
  CustomDrawerHeader,
  CustomDrawerHeaderAdmin,
  NavigateAdmin,
  IconNavAdmin
} from "../../../styles/styled";
// import { CustomDrawer } from "../../styles/styled";
import IconUserManager from "../../../assets/user-gear-solid 2.png";
import IconTestManager from "../../../assets/circle-question-solid 1.png";
import IconQuiz from "../../../assets/user-graduate-solid 1.png";
import avtAdmin from "../../../assets/admin.png";
import Avatar from "react-avatar-edit";

interface IProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  onClose: () => void;
}
interface Profile {
  pview: string;
}
const ContentLeftAdmin = (props: IProps) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const user = useSelector((state: any) => state.user.userAcc);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
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

  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const profileFinal = profile.map((item) => item.pview);
  const handleLogout = () => {
    dispatch(handleLogoutRedux());
  };
  useEffect(() => {
    if (user && user.auth === false) {
      navigate("/login");
      message.success("logout success");
    }
  }, [user]);
  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
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
          backgroundImage: `url(${profileFinal.length ? profileFinal[0] : avtAdmin})`
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

export default ContentLeftAdmin;
