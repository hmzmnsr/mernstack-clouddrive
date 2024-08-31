import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/login.page";
import SignUpPage from "../pages/signup/signup.page";

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
