import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/dashboard/dashboard";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default PrivateRoutes;
