import React from "react";
import cloudimg from "../../assets/images/cloudimgg.jpg";

const Tagline: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center mt-48">
      <div className="text-customBlue text-4xl font-semibold tracking-wide subpixel-antialiased text-center  leading-relaxed font-paintbrush">
        Securely Upload and Store Your Important Documents With CLoudDrive!
      </div>
      <div className="flex justify-center items-center">
        <img src={cloudimg} className="h-4/4 w-4/4" alt="logo" />
      </div>
    </div>
  );
};

export default Tagline;
