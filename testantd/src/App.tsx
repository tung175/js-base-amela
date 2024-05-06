import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { MenuDataItem } from "@ant-design/pro-layout";
import { PageContainer, ProLayout } from "@ant-design/pro-components";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { handleRefresh } from "./redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
// import { fetchUser } from "./redux/actions/UserAction";
import { getCurrentUser } from "./redux/actions/UserAction";
function App() {
  const dataUserRedux = useSelector((state: any) => state.user.userAcc);
  console.log(dataUserRedux);
  // const { user, loginContext } = useContext(UserContext);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
