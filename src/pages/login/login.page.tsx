import React from "react";
import CopyRight from "../../components/common/copyright.common";
import Logo from "../../components/common/logo.common";
import FlexContainer from "../../components/containers/flex.container";
import LoginForm from "../../components/forms/login.form";
import LoginIntro from "./intro.login";
import NoAccount from "./noaccount";
import OrBorders from "./orborders";
import Social from "./social";

const LoginPage: React.FC = () => {
  return (
    <FlexContainer className="flex flex-row flex-wrap">
      <FlexContainer className="w-1/2 flex-col px-24">
        <Logo />
        <LoginForm />
        <OrBorders />
        <NoAccount />
        <Social />
        <CopyRight />
      </FlexContainer>
      <LoginIntro />
    </FlexContainer>
  );
};

export default LoginPage;
