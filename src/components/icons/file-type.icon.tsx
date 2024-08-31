import { FaFileAlt, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa";

const FileTypeIcon = ({ type }: { type: string }) => {
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

export default FileTypeIcon;
