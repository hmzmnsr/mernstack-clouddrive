import React from "react";
import {
  FaFileAlt,
  FaFileImage,
  FaFilePdf,
  FaFileWord,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { MdArrowBackIos, MdFileDownload } from "react-icons/md";
import FlexContainer from "../../../components/containers/flex.container";
import { FileData, FolderType } from "../../../utils/types";

interface SelectFolderProps {
  folder: FolderType;
  files: FileData[];
  onReturn: () => void;
}

const formatFileSize = (size: number) => {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};

const formatDateTime = (dateTime: string) => {
  if (!dateTime) return "Date not available";
  const date = new Date(dateTime);
  if (isNaN(date.getTime())) {
    console.error("Invalid date string:", dateTime);
    return "Invalid Date";
  }
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

const SelectFolder: React.FC<SelectFolderProps> = ({
  folder,
  files,
  onReturn,
}) => {
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

  const toggleFavorite = (_id: string, isFavorite: boolean) => {
    // Add logic to toggle favorite status
  };

  const downloadFile = (file: FileData) => {
    // Mock download function
  };

  const filteredFiles = files.filter(
    (file) => file.folderRef?._id === folder._id
  );

  return (
    <FlexContainer className="flex-col px-3">
      <div className="grid grid-cols-12 w-full mb-1">
        <div className="text-lg font-bold tracking-wide font-sans leading-loose col-span-10">
          Folder: {folder.name}
        </div>
        <div className="col-span-2 flex justify-end mr-10">
          <button
            onClick={onReturn}
            className="flex items-center py-2 px-8 text-lg bg-customBlueTwo text-white rounded-xl hover:bg-blue-600"
          >
            <MdArrowBackIos /> Back
          </button>
        </div>
      </div>

      {filteredFiles.length === 0 ? (
        <div>No files found in this folder.</div>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {filteredFiles.map((file, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <div className="mr-4">
                    {getFileIcon(file.attachmentRef?.type)}
                  </div>
                  <div className="flex-1 text-lg font-semibold">
                    {file.name}
                  </div>
                  <button
                    onClick={() => downloadFile(file)}
                    className="text-yellow-500 mt-1"
                  >
                    <MdFileDownload size={24} />
                  </button>
                  <button
                    onClick={() => toggleFavorite(file._id, file.isFavorite)}
                    className="text-yellow-500"
                  >
                    {file.isFavorite ? (
                      <FaStar size={18} />
                    ) : (
                      <FaRegStar size={18} />
                    )}
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <div>Size: {formatFileSize(file.attachmentRef?.size)}</div>
                  <div>
                    Date: {formatDateTime(file.attachmentRef?.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </FlexContainer>
  );
};

export default SelectFolder;
