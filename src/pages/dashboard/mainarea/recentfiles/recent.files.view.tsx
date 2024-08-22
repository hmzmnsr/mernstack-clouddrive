import React, { useEffect, useState } from "react";
import { FaFileAlt, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa";
import { getAttachments } from "../../../../services/api";
import "./filescustom.css";

interface Attachment {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  attachmentOwnership: string;
}

const FilesViewArea: React.FC = () => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await getAttachments();
        // Reverse the list and take the top 10 most recent files
        const recentAttachments = response.data.reverse().slice(0, 10);
        setAttachments(recentAttachments);
      } catch (error) {
        console.error("Error fetching attachments:", error);
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

  return (
    <div className="h-72 overflow-auto custom-scrollbar"> {/* Added custom-scrollbar class */}
      {attachments.map((attachment, index) => (
        <div key={index} className="grid grid-cols-12  bg-white py-2">
          <div className="col-span-2 w-full h-full flex text-lg items-center justify-center">
            <div className="flex flex-col justify-center text-center">
              <div className="flex justify-center text-center">
                {getFileIcon(attachment.attachmentType)}
              </div>
              <div className="text-lg">
                {attachment.attachmentName}
              </div>
            </div>
          </div>
          <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
            {formatFileSize(attachment.size)}
          </div>
          <div className="col-span-3 w-full h-full flex items-center justify-center text-lg">
            {formatDateTime(attachment.dateTime)}
          </div>
          <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
            {attachment.attachmentOwnership}
          </div>
          <div className="col-span-3 w-full h-full flex items-center justify-center text-lg">
            Access Info Placeholder
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default FilesViewArea;
