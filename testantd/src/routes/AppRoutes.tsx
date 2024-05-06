import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "../pages/auth/Login";
import Dashboard from "../components/share/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ExamFinish from "../components/client/ExamFinish";
import Exam from "../components/client/Exam";
import DashboardAdmin from "../components/admin/dashboard/DashboardAdmin";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" key="login" element={<Login />} />
        <Route path="/exam-finish" element={<ExamFinish />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* <Route
            path="/dashboard"
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
