import { Button, Result } from "antd";

const PrivateRoute = () => {
  // console.log(props);
  // const { user } = useContext(UserContext);
  //   const user = useSelector((state) => state.user.userAcc);
  //   if (user && !user.auth) {
  //     return (
  //       <>
  //         <Result
  //           status="403"
  //           title="403"
  //           subTitle="Sorry, you are not authorized to access this page."
  //           extra={<Button type="primary">Back Home</Button>}
  //         />
  //       </>
  //     );
  //   }
  //   return <>{props.children}</>;
  return (
    <>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </>
  );
};

export default PrivateRoute;
