import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  FaFileAlt,
  FaFileImage,
  FaFilePdf,
  FaFileWord,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { useDispatch } from "react-redux";
import SidebarButton from "../../../components/buttons/sidebar.button";
import CreateFilePopup from "../../../components/popups/create-file-popup";
import {
  createAttachment,
  createFile,
  getFiles,
} from "../../../redux/actions/file.action";
import { AppDispatch } from "../../../redux/reducers/store";
import { FileData } from "../../../utils/types";

interface AllFilesProps {
  files: FileData[];
}

const AllFiles: React.FC<AllFilesProps> = ({ files }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [showPopup, setShowPopup] = useState(false);

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

  const toggleFavorite = (_id: string, isFavorite: boolean) => {};

  const downloadFile = (file: FileData) => {
    // Mock download function
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

  const handleCreateFile = async (
    fileName: string,
    file: File | null,
    selectedFolder: string
  ) => {
    const attachmentData = await createAttachment({
      name: file?.name || "",
      type: file?.type || "",
      size: file?.size || 0,
    });

    if (attachmentData?._id) {
      await createFile({
        attachmentRef: attachmentData._id,
        folderRef: selectedFolder,
        name: fileName,
      });

      dispatch(getFiles());
    }
  };

  return (
    <div className="px-7 w-full z-10">
      <div className="grid grid-cols-12 pt-4">
        <div className="text-lg font-bold tracking-wide font-sans leading-loose col-span-10">
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
      {files.length === 0 ? (
        <div>No files found.</div>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {files.map((file, index) => (
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
                  <div>Date: {formatDateTime(file.createdAt)}</div>
                  <div>Folder Name: {file.folderRef?.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showPopup && (
        <CreateFilePopup
          onClose={() => setShowPopup(false)}
          onCreate={handleCreateFile}
        />
      )}
    </div>
  );
};

export default AllFiles;
