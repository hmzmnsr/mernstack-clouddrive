import React, { useEffect, useState } from "react";
import TopNavigation from "./topNavigation/topnavigation";
import RecentFolders from "./recentfolders/recent.folders";
import AllFolders from "../allfolders/all.folders";
import AllFiles from "../allfiles/all.files";
import RecentFiles from "./recentfiles/recent.files";
import FavFiles from "../favfiles/fav.files"; // Import the FavFiles component
import { getAttachments } from "../../../services/api";

interface Attachment {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  isFavorite: boolean;
}

interface MainAreaProps {
  selectedSection: string;
}

const MainArea: React.FC<MainAreaProps> = ({ selectedSection }) => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await getAttachments();
        const attachmentsWithFavorite = response.data.map((attachment: Omit<Attachment, 'isFavorite'>) => ({
          ...attachment,
          isFavorite: false, // Initialize as not favorite
        }));
        setAttachments(attachmentsWithFavorite);
      } catch (error) {
        console.error("Error fetching attachments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttachments();
  }, []);

  const renderContent = () => {
    switch (selectedSection) {
      case "All Folders":
        return <AllFolders />;
      case "All Files":
        return <AllFiles attachments={attachments} setAttachments={setAttachments} />; // Pass props
      case "Favorites":
        return <FavFiles attachments={attachments} />; // Pass props to FavFiles
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
      {loading ? <div>Loading...</div> : renderContent()}
    </div>
  );
};

export default MainArea;
