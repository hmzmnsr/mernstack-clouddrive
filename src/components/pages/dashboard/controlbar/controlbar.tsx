import React from "react";
import Actions from "./actions";
import ControlBarButton from "./button";
import LogoHeading from "./logoheading";
import StorageShow from "./storageshow";
import LogoutButton from "./logout";

const ControlBar: React.FC = () => {



  return (
    <div className="min-h-screen flex flex-col justify-between bg-customBlue pb-10">
      <div>
        <LogoHeading />
        <Actions />
        <ControlBarButton />
      </div>
      <StorageShow />
      <LogoutButton/>
    </div>
  );
};

export default ControlBar;
