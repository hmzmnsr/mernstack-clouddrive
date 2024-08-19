import {
  faCog,
  faFile,
  faHeart,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import LogoHeading from "../../../components/common/logo-heading.common";
import FlexContainer from "../../../components/containers/flex.container";
import SidebarAction from "../../../components/sidebar/action.sidebar";
import ControlBarButton from "./button";
import LogoutButton from "./logout";
import StorageShow from "./storageshow";

const ControlBar: React.FC = () => {
  return (
    <FlexContainer className="min-h-screen w-full flex-col  bg-customBlue pb-10">
      <LogoHeading />
      <SidebarAction icon={faHome} text="Home" className="mt-6" />
      <SidebarAction icon={faFile} text="All Files" />
      <SidebarAction icon={faHeart} text="Favorites" />
      <SidebarAction icon={faCog} text="Settings" />
      <ControlBarButton />

      <StorageShow />
      <LogoutButton />
    </FlexContainer>
  );
};

export default ControlBar;
