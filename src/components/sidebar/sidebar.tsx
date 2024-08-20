import {
  faCog,
  faFile,
  faHeart,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/reducers/profile.reducer";
import SidebarButton from "../buttons/sidebar.button";
import LogoHeading from "../common/logo-heading.common";
import FlexContainer from "../containers/flex.container";
import CreateFolderPopup from "../popups/create-folder.popup";
import SidebarAction from "./action.sidebar";
import StorageShow from "./storage-section.sidebar";

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <FlexContainer className="min-h-screen w-full flex-col  bg-customBlue pb-10">
      <LogoHeading />
      <SidebarAction icon={faHome} text="Home" className="mt-6" />
      <SidebarAction icon={faFile} text="All Files" />
      <SidebarAction icon={faHeart} text="Favorites" />
      <SidebarAction icon={faCog} text="Settings" />
      <FlexContainer className="w-full flex-row items-center">
        <SidebarButton onClick={() => setShowPopup(true)} className="w-3/5">
          <FontAwesomeIcon icon={faPlus} className="pr-2" />
          Create New
        </SidebarButton>
        {showPopup && <CreateFolderPopup onClose={() => setShowPopup(false)} />}
      </FlexContainer>

      <StorageShow />
      <SidebarButton className="w-3/5" onClick={handleLogout}>
        Logout
      </SidebarButton>
    </FlexContainer>
  );
};

export default SideBar;
