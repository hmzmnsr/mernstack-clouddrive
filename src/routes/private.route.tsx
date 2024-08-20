import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboard/dashboard.page";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default PrivateRoutes;
