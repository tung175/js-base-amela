import React, { useEffect, useState } from "react";
import { message, type DrawerProps, type RadioChangeEvent } from "antd";
import { CustomButtonFooter, CustomDrawer, CustomDrawerContent, CustomDrawerHeader } from "../../styles/styled";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleLogoutRedux } from "../../redux/actions/UserAction";
// import { CustomDrawer } from "../../styles/styled";


interface IProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  onClose: () => void;
}



const ContentLeft = (props: IProps) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const user = useSelector((state: any) => state.user.userAcc)
  const dispatch = useDispatch<any>()
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(handleLogoutRedux())
  };
  useEffect(() => {
    if (user && user.auth === false) {
      navigate("/login")
      message.success("logout success")
    }
  }, [user])
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
        footer={<CustomButtonFooter onClick={() => handleLogout()}>LOGOUT</CustomButtonFooter>}
      >
        <CustomDrawerHeader></CustomDrawerHeader>
        {user && user?.email && (
              <>
                <CustomDrawerContent>User: {user.email}</CustomDrawerContent>
                <CustomDrawerContent>Point: 100</CustomDrawerContent>
              </>
            )}
      </CustomDrawer>
    </>
  );
};

export default ContentLeft;
