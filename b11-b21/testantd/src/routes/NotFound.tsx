import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NotFound: React.FC = () => {
  const user = useSelector((state: any) => state.user.userAcc);
  const history = useNavigate();
  const handleBackHome = () => {
    if (user && user.auth === true) {
      history("/dashboard");
    } 
    if (user && user.auth === null) {
      history("/login");
    }
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => handleBackHome()}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
