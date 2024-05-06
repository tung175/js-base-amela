import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
// import { CustomSider } from "../../styles/styled";
import styled from "styled-components";
import ContentRightAdmin from "./ContentRightAdmin";
// import { CallCurrentAuth } from "../../services/UserService";

const DashboardAdmin: React.FC = () => {
  // useEffect(() => {
  //   CallCurrentAuth();
  // }, []);
  return (
    <>
      {/* <ContentLeft /> */}
      <ContentRightAdmin />
    </>
  );
};

export default DashboardAdmin;
