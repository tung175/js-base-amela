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
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import { CallCurrentAuth } from "../../services/UserService";

const Dashboard: React.FC = () => {
  // useEffect(() => {
  //   CallCurrentAuth();
  // }, []);
  return (
    <>
      {/* <ContentLeft /> */}
      <ContentRight />
    </>
  );
};

export default Dashboard;
