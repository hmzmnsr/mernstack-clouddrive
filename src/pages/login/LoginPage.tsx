import React from "react";
import FlexContainer from "../../components/containers/flex.container";
import LoginIntro from "./intro.login";
import LoginComponents from "./logincomponents";

const LoginPage: React.FC = () => {
  return (
    <FlexContainer className="flex flex-row flex-wrap">
      <LoginComponents />
      <LoginIntro />
    </FlexContainer>
  );
};

export default LoginPage;
