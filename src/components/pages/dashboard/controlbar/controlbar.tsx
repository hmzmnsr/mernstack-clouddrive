import React from "react";
import Actions from "./actions";
import ControlBarButton from "./button";
import LogoHeading from "./logoheading";
import StorageShow from "./storageshow";

const ControlBar: React.FC = () => {



  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-cyan-500 to-blue-500 pb-10">
      <div>
        <LogoHeading />
        <Actions />
        <ControlBarButton />
      </div>
      <StorageShow />
    </div>
  );
};

export default ControlBar;
