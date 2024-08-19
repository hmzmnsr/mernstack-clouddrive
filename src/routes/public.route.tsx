import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/login/LoginPage";
import SignUpPage from "../components/pages/signup/signup";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default PublicRoutes;
