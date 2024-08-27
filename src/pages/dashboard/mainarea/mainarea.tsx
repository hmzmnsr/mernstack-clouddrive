import React, { useEffect, useState } from "react";
import TopNavigation from "./topNavigation/topnavigation";
import RecentFolders from "./recentfolders/recent.folders";
import AllFolders from "../allfolders/all.folders";
import AllFiles from "../allfiles/all.files";
import RecentFiles from "./recentfiles/recent.files";
import FavFiles from "../favfiles/fav.files";
import { getFiles } from "../../../services/api";

interface FileData {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  isFavorite: boolean;
  folderName: string;
}

interface MainAreaProps {
  selectedSection: string;
}

const MainArea: React.FC<MainAreaProps> = ({ selectedSection }) => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await getFiles();
        setFiles(response);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const renderContent = () => {
    switch (selectedSection) {
      case "All Folders":
        return <AllFolders />;
      case "All Files":
        return <AllFiles files={files} setFiles={setFiles} />;
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
