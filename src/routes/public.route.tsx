import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginpage/login.page";
import SignUpPage from "../pages/signuppage/signup.page";

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
