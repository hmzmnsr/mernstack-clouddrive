import React from "react";
import cloudLogo from "../../assets/images/cloud.jpg";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-5 mb-4">
      <img src={cloudLogo} className="h-16 w-16" alt="logo" />
      <p className="text-4xl text-customBlue font-semibold">CloudDrive</p>
    </div>
  );
};

export default Logo;
