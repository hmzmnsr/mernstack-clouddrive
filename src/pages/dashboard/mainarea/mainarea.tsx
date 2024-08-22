import React from "react";
import TopNavigation from "./topNavigation/topnavigation";
import RecentFolders from "./recentfolders/recent.folders";
import RecentFiles from "./recentfiles/recent.files";
import AllFolders from "../allfolders/all.folders";

interface MainAreaProps {
  selectedSection: string;
}

const MainArea: React.FC<MainAreaProps> = ({ selectedSection }) => {
  const renderContent = () => {
    switch (selectedSection) {
      case "All Folders":
        return <AllFolders />;
      case "All Files":
        return <RecentFiles />;
      case "Favorites":
        return <div>Favorites Section</div>; // Replace with actual component
      case "Settings":
        return <div>Settings Section</div>; // Replace with actual component
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
      {renderContent()}
    </div>
  );
};

export default MainArea;
