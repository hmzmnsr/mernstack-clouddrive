import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../../redux/actions/file.action";
import { AppDispatch } from "../../../redux/reducers/store";
import AllFiles from "../allfiles/all.files";
import AllFolders from "../allfolders/all.folders";
import FavFiles from "../favfiles/fav.files";
import RecentFiles from "./recentfiles/recent.files";
import RecentFolders from "./recentfolders/recent.folders";
import TopNavigation from "./topNavigation/topnavigation";

interface MainAreaProps {
  selectedSection: string;
}

const MainArea: React.FC<MainAreaProps> = ({ selectedSection }) => {
  const dispatch = useDispatch<AppDispatch>();
  const fileState = useSelector((state: any) => state.File);

  const { list: files, isLoading: loading } = fileState;

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  const renderContent = () => {
    switch (selectedSection) {
      case "All Folders":
        return <AllFolders />;
      case "All Files":
        return <AllFiles files={files} />;
      case "Favorites":
        return <FavFiles files={files} />;
      case "Settings":
        return <div>Settings Section</div>;
      default:
        return (
          <>
            <RecentFolders />
            <RecentFiles />
          </>
        );
    }
  };

  return (
    <div className="bg-gray-100 w-full">
      <TopNavigation />
      {loading ? <div>Loading...</div> : renderContent()}
    </div>
  );
};

export default MainArea;
