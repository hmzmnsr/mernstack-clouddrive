import React from "react";
import FlexContainer from "../../../components/containers/flex.container";
import { FaFileAlt, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa";

interface Attachment {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  isFavorite: boolean;
}

interface FavFilesProps {
  attachments: Attachment[];
}

const FavFiles: React.FC<FavFilesProps> = ({ attachments }) => {
  const favoriteFiles = attachments.filter((attachment) => attachment.isFavorite);

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

  return (
    <FlexContainer className="flex-col p-4">
      <div className="text-lg font-bold tracking-wide font-sans leading-loose col-span-10 pl-3 pb-3">
        Favorite Files
      </div>
      {favoriteFiles.length === 0 ? (
        <div>No favorite files found.</div>
      ) : (
        <FlexContainer className="pl-1 w-full flex-wrap z-10">
          {favoriteFiles.map((attachment, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <div className="mr-4">{getFileIcon(attachment.attachmentType)}</div>
                  <div className="text-lg font-semibold">{attachment.attachmentName}</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>Size: {formatFileSize(attachment.size)}</div>
                  <div>Date: {formatDateTime(attachment.dateTime)}</div>
                </div>
              </div>
            </div>
          ))}
        </FlexContainer>
      )}
    </FlexContainer>
  );
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

export default FavFiles;
