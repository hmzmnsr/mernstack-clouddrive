import React, { useEffect, useState } from "react";
import { FaFileAlt, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa"; // Import some icons from react-icons
import { getAttachments } from "../../../../services/api";

// Updated Attachment interface based on schema
interface Attachment {
  attachmentName: string;
  attachmentType: string;
  size: number; // File size in bytes
  dateTime: string; // DateTime for last modified date
  attachmentOwnership: string; // Owner name
  // Assuming 'whoCanAccess' is part of attachmentOwnership or another field
  // Add if needed, based on API response structure
}

const FilesViewArea: React.FC = () => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await getAttachments();
        setAttachments(response.data);
      } catch (error) {
        console.error("Error fetching attachments:", error);
      }
    };

    fetchAttachments();
  }, []);

  // Function to return the appropriate icon based on the file type
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

  // Format file size from bytes to a human-readable format
  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  // Convert dateTime string to a readable format
  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <div>
      {attachments.map((attachment, index) => (
        <div key={index} className="grid grid-cols-12 mt-3 bg-white py-2">
          <div className="col-span-2 w-full h-full flex text-lg items-center justify-center">
            <div className="flex flex-col justify-center text-center">
              <div className="flex justify-center text-center">
                {getFileIcon(attachment.attachmentType)}
              </div>
              <div className="text-lg">
                {attachment.attachmentName}
                {attachment.attachmentType}
              </div>
            </div>
          </div>
          <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
            {formatFileSize(attachment.size)}
          </div>
          <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
            {formatDateTime(attachment.dateTime)}
          </div>
          <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
            {attachment.attachmentOwnership}
          </div>
          {/* Replace with actual access info if available */}
          <div className="col-span-3 w-full h-full flex items-center justify-center text-lg">
            Access Info Placeholder
          </div>
          <div className="col=span-2"></div>
        </div>
      ))}
    </div>
  );
};

export default FilesViewArea;
