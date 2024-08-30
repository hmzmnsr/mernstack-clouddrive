import {
  faCog,
  faFile,
  faFolder,
  faHeart,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/reducers/profile.reducer";
import { setCurrentPage } from "../../redux/reducers/system.reducer";
import { PageNames, PageUrls } from "../../utils/enums";
import SidebarButton from "../buttons/sidebar.button";
import LogoHeading from "../common/logo-heading.common";
import FlexContainer from "../containers/flex.container";
import CreateFolderPopup from "../popups/create-folder.popup";
import SidebarAction from "./action.sidebar";
import StorageShow from "./storage-section.sidebar";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const { page: currentPage } = useSelector((state: any) => state.System);

  return (
    <FlexContainer className="h-screen w-full flex-col bg-customBlue pb-16">
      <LogoHeading />

      <FlexContainer className="flex-1 flex-col mt-5">
        <SidebarAction
          icon={faHome}
          text="Home"
          isActive={currentPage === PageNames.HOME}
          onClick={() => {
            dispatch(setCurrentPage(PageNames.HOME));
            navigate(PageUrls.HOME);
          }}
        />
        <SidebarAction
          icon={faFolder}
          text="All Folders"
          isActive={currentPage === PageNames.FOLDERS}
          onClick={() => {
            dispatch(setCurrentPage(PageNames.FOLDERS));
            navigate(PageUrls.FOLDERS);
          }}
        />
        <SidebarAction
          icon={faFile}
          text="All Files"
          isActive={currentPage === PageNames.FILES}
          onClick={() => {
            dispatch(setCurrentPage(PageNames.FILES));
            navigate(PageUrls.FILES);
          }}
        />
        <SidebarAction
          icon={faHeart}
          text="Favorites"
          isActive={currentPage === PageNames.FAVORITES}
          onClick={() => {
            dispatch(setCurrentPage(PageNames.FAVORITES));
            navigate(PageUrls.FAVORITES);
          }}
        />
        <SidebarAction
          icon={faCog}
          text="Settings"
          isActive={currentPage === PageNames.SETTINGS}
          onClick={() => {
            dispatch(setCurrentPage(PageNames.SETTINGS));
            navigate(PageUrls.SETTINGS);
          }}
        />

        <FlexContainer className="w-full flex-row items-center my-8">
          <SidebarButton
            onClick={() => setShowPopup(true)}
            className="w-3/5 py-3"
          >
            <FontAwesomeIcon icon={faPlus} className="pr-2" />
            Create Folder
          </SidebarButton>
          {showPopup && (
            <CreateFolderPopup onClose={() => setShowPopup(false)} />
          )}
        </FlexContainer>

        <StorageShow />

        <SidebarButton className="w-3/5 py-3" onClick={handleLogout}>
          Logout
        </SidebarButton>
      </FlexContainer>
    </FlexContainer>
  );
};

export default SideBar;
