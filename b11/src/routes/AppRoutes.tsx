import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import NotFound from "./NotFound";
import Resgister from "../pages/auth/Resgister";
import Dashboard from "../components/client/Dashboard";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Resgister />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route
            path="/users"
            element={
              <PrivateRoute>
                <TableUsers />
              </PrivateRoute>
            }
          /> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
