import React from "react";
import CopyRight from "../../components/common/copyright.common";
import Logo from "../../components/common/logo.common";
import LoginForm from "../../components/forms/login.form";
import NoAccount from "./noaccount";
import OrBorders from "./orborders";
import Social from "./social";

const LoginComponents: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Logo />
      <LoginForm />
      <OrBorders />
      <NoAccount />
      <Social />
      <CopyRight />
      <div className="mt-10"></div>
    </div>
  );
};

export default LoginComponents;
