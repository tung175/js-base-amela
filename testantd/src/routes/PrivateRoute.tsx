import { Button, Result } from "antd";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";

const PrivateRoute = (props: any) => {
  console.log(props);
  const user = useSelector((state: any) => state.user.userAcc);
  const history = useNavigate();
  const location = useLocation();

  // const handleBackHome = () => {
  //   if (user && !user.auth) {
  //     history("/dashboard");
  //   } else {
  //     history("/login");
  //   }
  // };

  // console.log(user);

  if (user && user?.auth == null) {
    return (
      <>
        <Navigate to="/login"></Navigate>
      </>
    );
  }

  if (location.pathname === "/login") {
    return <>{props.children}</>;
  }

  return <>{props.children}</>;
  // return (
  //   <>
  //     <Result
  //       status="403"
  //       title="403"
  //       subTitle="Sorry, you are not authorized to access this page."
  //       extra={<Button type="primary">Back Home</Button>}
  //     />
  //   </>
  // );
};

export default PrivateRoute;
