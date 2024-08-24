import React, { useState } from "react";
import { FaFileAlt, FaFileImage, FaFilePdf, FaFileWord, FaRegStar, FaStar } from "react-icons/fa";
import SidebarButton from "../../../components/buttons/sidebar.button";
import CreateFilePopup from "../../../components/popups/create-file-popup";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdFileDownload } from "react-icons/md";

interface Attachment {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  isFavorite: boolean;
}

interface AllFilesProps {
  attachments: Attachment[];
  setAttachments: React.Dispatch<React.SetStateAction<Attachment[]>>;
}

const AllFiles: React.FC<AllFilesProps> = ({ attachments, setAttachments }) => {
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

  const toggleFavorite = (index: number) => {
    setAttachments((prevAttachments) =>
      prevAttachments.map((attachment, i) =>
        i === index
          ? { ...attachment, isFavorite: !attachment.isFavorite }
          : attachment
      )
    );
  };

  const downloadFile = (attachment: Attachment) => {
    // Mock download function
    alert(`Downloading ${attachment.attachmentName}`);
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

  const handleCreateAttachment = (fileName: string, file: File | null) => {
    const newAttachment: Attachment = {
      attachmentName: fileName,
      attachmentType: file ? file.type.split("/")[1] : "doc",
      size: file ? file.size : 0,
      dateTime: new Date().toISOString(),
      isFavorite: false,
    };

    setAttachments((prev) => [...prev, newAttachment]);
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
      {attachments.length === 0 ? (
        <div>No files found.</div>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {attachments.map((attachment, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <div className="mr-4">{getFileIcon(attachment.attachmentType)}</div>
                  <div className="flex-1 text-lg font-semibold">
                    {attachment.attachmentName}
                  </div>
                  <button
                    onClick={() => downloadFile(attachment)}
                    className="text-yellow-500 mt-1"
                  >
                    <MdFileDownload size={24} />
                  </button>
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="text-yellow-500"
                  >
                    {attachment.isFavorite ? (
                      <FaStar size={18} />
                    ) : (
                      <FaRegStar size={18} />
                    )}
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <div>Size: {formatFileSize(attachment.size)}</div>
                  <div>Date: {formatDateTime(attachment.dateTime)}</div>
                  <div>Folder Name: Reports</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showPopup && (
        <CreateFilePopup
          onClose={() => setShowPopup(false)}
          onCreate={handleCreateAttachment}
        />
      )}
    </div>
  );
};

export default AllFiles;
