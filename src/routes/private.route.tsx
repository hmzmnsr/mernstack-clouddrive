import { Navigate, Route, Routes } from "react-router-dom";
import ControlBar from "../components/pages/dashboard/controlbar/controlbar";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<ControlBar />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default PrivateRoutes;
