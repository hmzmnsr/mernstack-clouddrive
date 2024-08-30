import { FaFileAlt, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa";
import { formatDateTime, formatFileSize } from "../../utils/helper";
import { FileData } from "../../utils/types";

interface RecentFileItemProps {
  file: FileData;
}
const RecentFileItem = (props: RecentFileItemProps) => {
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

  const { file } = props;
  return (
    <div className="grid grid-cols-12 bg-white py-2">
      <div className="col-span-2 w-full h-full flex flex-col text-lg items-center justify-center">
        <div className="flex justify-center text-center mb-1">
          {getFileIcon(file.attachmentRef?.type)}
        </div>
        <div className="text-lg text-center">{file.name}</div>
      </div>
      <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
        {formatFileSize(file.attachmentRef?.size)}
      </div>
      <div className="col-span-3 w-full h-full flex items-center justify-center text-lg">
        {formatDateTime(file.attachmentRef?.createdAt)}
      </div>
      <div className="col-span-2 w-full h-full flex items-center justify-center text-lg">
        {file.folderRef?.name}
      </div>
      <div className="col-span-3 w-full h-full flex items-center justify-center text-lg">
        Access Info Placeholder
      </div>
    </div>
  );
};

export default RecentFileItem;
