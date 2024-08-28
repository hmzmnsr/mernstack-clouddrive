import React, { useEffect, useState } from "react";
import { FaFileAlt, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../../../redux/actions/file.action";
import { AppDispatch } from "../../../../redux/reducers/store";
import "./filescustom.css";

interface FileData {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  folderName: string;
}

const RecentFilesView: React.FC = () => {
  const [recentFiles, setRecentFiles] = useState<FileData[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const fileState = useSelector((state: any) => state.File);

  const { list: files } = fileState;

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  useEffect(() => {
    if (files?.length > 0) {
      const tempFiles = files;
      // Reverse code here
      setRecentFiles(tempFiles.slice(0, 10));
    } else {
      setRecentFiles([]);
    }
  }, [dispatch, files]);

  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

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
    <div className="h-72 overflow-auto custom-scrollbar">
      {recentFiles.map((file, index) => (
        <div key={index} className="grid grid-cols-12 bg-white py-2">
          <div className="col-span-2 w-full h-full flex flex-col text-lg items-center justify-center">
            <div className="flex justify-center text-center mb-1">
              {getFileIcon(file.attachmentType)}
            </div>
            <div className="text-lg text-center">
              {file.attachmentName} {/* Ensuring attachmentName is displayed */}
            </div>
          </div>
          <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
            {formatFileSize(file.size)} {/* Example size formatting */}
          </div>
          <div className="col-span-3 w-full h-full flex items-center justify-center text-lg">
            {new Date(file.dateTime).toLocaleDateString()}{" "}
            {/* Example date formatting */}
          </div>
          <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
            {file.folderName} {/* Display folder name */}
          </div>
          <div className="col-span-3 w-full h-full flex items-center justify-center text-lg">
            Access Info Placeholder {/* Placeholder for access info */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentFilesView;
