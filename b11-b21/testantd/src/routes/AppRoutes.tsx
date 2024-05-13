import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ExamFinish from "../components/client/ExamFinish";
import Exam from "../components/client/Exam";
import DashboardAdmin from "../pages/dashboard/DashboardAdmin";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
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
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
