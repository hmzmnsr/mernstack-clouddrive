import React from "react";
import cloudLogo from "../../assets/images/cloud.jpg";
import FlexContainer from "../containers/flex.container";

const Logo: React.FC = () => {
  return (
    <FlexContainer className="w-full flex-row justify-center items-center ">
      <img src={cloudLogo} className="h-16 w-16" alt="logo" />
      <p className="text-4xl text-customBlue font-semibold">CloudDrive</p>
    </FlexContainer>
  );
};

export default Logo;
