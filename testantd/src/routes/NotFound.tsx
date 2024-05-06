import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NotFound: React.FC = () => {
  const user = useSelector((state: any) => state.user.userAcc);
  const history = useNavigate();
  const handleBackHome = () => {
    if (user && !user.auth) {
      history("/dashboard");
    } 
    if (!user) {
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
