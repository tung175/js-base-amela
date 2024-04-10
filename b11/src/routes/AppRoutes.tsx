import { Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import NotFound from "./NotFound";
import Resgister from "../components/register/Resgister";

const AppRoutes = () => {
    return (
      <>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resgister />} />
          {/* <Route
            path="/users"
            element={
              <PrivateRoute>
                <TableUsers />
              </PrivateRoute>
            }
          /> */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </>
    );
  };
  
  export default AppRoutes;