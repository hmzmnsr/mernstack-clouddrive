import React, { useEffect, useState } from "react";
import {
  FaFileAlt,
  FaFileImage,
  FaFilePdf,
  FaFileWord,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { getAttachments } from "../../../services/api";
import FlexContainer from "../../../components/containers/flex.container";
import SidebarButton from "../../../components/buttons/sidebar.button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateFilePopup from "../../../components/popups/create-file-popup";

interface Attachment {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  attachmentOwnership: string;
  isFavorite: boolean;
}

const AllFiles: React.FC = () => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await getAttachments();
        const attachmentsWithFavorite = response.data.map((attachment: Attachment) => ({
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

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf size={28} />;
      case "image":
        return <FaFileImage size={28} />;
      case "doc":
      case "docx":
        return <FaFileWord size={28} />;
      default:
        return <FaFileAlt size={28} />;
    }
  };

  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const toggleFavorite = (index: number) => {
    setAttachments((prevAttachments) =>
      prevAttachments.map((attachment, i) =>
        i === index
          ? { ...attachment, isFavorite: !attachment.isFavorite }
          : attachment
      )
    );
  };

  const handleCreateAttachment = (fileName: string, ownership: string) => {
    const newAttachment: Attachment = {
      attachmentName: fileName,
      attachmentType: "doc", // You can adjust the type based on user input
      size: 0,
      dateTime: new Date().toISOString(),
      attachmentOwnership: ownership,
      isFavorite: false,
    };

    setAttachments((prev) => [...prev, newAttachment]);
  };

  return (
    <FlexContainer className="flex-col p-4 relative">
      <div className="grid grid-cols-12">
        <div className="text-lg font-bold tracking-wide font-sans leading- col-span-10">
          All Files
        </div>
        <SidebarButton
          className="px-7 py-3 font-light text-base col-span-2"
          onClick={() => setShowPopup(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="pr-2" />
          Create File
        </SidebarButton>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : attachments.length === 0 ? (
        <div>No files found.</div>
      ) : (
        <FlexContainer className="px-4 w-full flex-wrap z-10">
          {attachments.map((attachment, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-white p-4 rounded-lg shadow-md relative">
                <button
                  onClick={() => toggleFavorite(index)}
                  className="absolute top-2 right-2 text-yellow-500"
                >
                  {attachment.isFavorite ? (
                    <FaStar size={20} />
                  ) : (
                    <FaRegStar size={20} />
                  )}
                </button>
                <div className="flex items-center mb-2">
                  <div className="mr-4">{getFileIcon(attachment.attachmentType)}</div>
                  <div className="text-lg font-semibold">
                    {attachment.attachmentName}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>Size: {formatFileSize(attachment.size)}</div>
                  <div>Date: {formatDateTime(attachment.dateTime)}</div>
                  <div>Owner: {attachment.attachmentOwnership}</div>
                </div>
              </div>
            </div>
          ))}
        </FlexContainer>
      )}
      {showPopup && (
        <CreateFilePopup
          onClose={() => setShowPopup(false)}
          onCreate={handleCreateAttachment}
        />
      )}
    </FlexContainer>
  );
};

export default AllFiles;
