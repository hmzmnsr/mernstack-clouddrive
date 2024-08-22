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
import {
  faCog,
  faFile,
  faFolder,
  faHeart,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarProps {
  setSelectedSection: (section: string) => void;
  selectedSection: string;
}

const SideBar: React.FC<SidebarProps> = ({ setSelectedSection, selectedSection }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <FlexContainer className="h-screen w-full flex-col bg-customBlue pb-16">
      <LogoHeading />

      <FlexContainer className="flex-1 flex-col mt-5">
        <SidebarAction
          icon={faHome}
          text="Home"
          isActive={selectedSection === "Home"}
          onClick={() => setSelectedSection("Home")}
        />
        <SidebarAction
          icon={faFolder}
          text="All Folders"
          isActive={selectedSection === "All Folders"}
          onClick={() => setSelectedSection("All Folders")}
        />
        <SidebarAction
          icon={faFile}
          text="All Files"
          isActive={selectedSection === "All Files"}
          onClick={() => setSelectedSection("All Files")}
        />
        <SidebarAction
          icon={faHeart}
          text="Favorites"
          isActive={selectedSection === "Favorites"}
          onClick={() => setSelectedSection("Favorites")}
        />
        <SidebarAction
          icon={faCog}
          text="Settings"
          isActive={selectedSection === "Settings"}
          onClick={() => setSelectedSection("Settings")}
        />

        <FlexContainer className="w-full flex-row items-center my-8">
          <SidebarButton onClick={() => setShowPopup(true)} className="w-3/5">
            <FontAwesomeIcon icon={faPlus} className="pr-2" />
            Create Folder
          </SidebarButton>
          {showPopup && <CreateFolderPopup onClose={() => setShowPopup(false)} />}
        </FlexContainer>

        <StorageShow />

        <SidebarButton className="w-3/5" onClick={handleLogout}>
          Logout
        </SidebarButton>
      </FlexContainer>
    </FlexContainer>
  );
};

export default SideBar;
