import React from "react";
import FlexContainer from "../../components/containers/flex.container";
import LoginIntro from "./intro.login";
import LoginComponents from "./logincomponents";

const LoginPage: React.FC = () => {
  return (
    <FlexContainer className="flex flex-row flex-wrap">
      <FlexContainer className="w-1/2 flex-col px-24">
        <LoginComponents />
      </FlexContainer>
      <LoginIntro />
    </FlexContainer>
  );
};

export default LoginPage;
