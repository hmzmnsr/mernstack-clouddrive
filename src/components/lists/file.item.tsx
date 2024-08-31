import { FaRegStar, FaStar } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getFiles, setFavorite } from "../../redux/actions/file.action";
import { AppDispatch } from "../../redux/reducers/store";
import { formatDateTime, formatFileSize } from "../../utils/helper";
import { FileData } from "../../utils/types";
import FileTypeIcon from "../icons/file-type.icon";

const FileItem = ({
  file,
  folderRef,
}: {
  file: FileData;
  folderRef?: string | undefined;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const toggleFavorite = async (fileId: string, isFavorite: boolean) => {
    await dispatch(setFavorite({ id: fileId, isFavorite }));
    dispatch(getFiles(folderRef));
  };

  const downloadFile = (file: FileData) => {
    window.open(file.attachmentRef?.path, "_blank");
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <div className="mr-4">
            <FileTypeIcon type={file.attachmentRef?.type} />
          </div>
          <div className="flex-1 text-lg font-semibold">{file.name}</div>
          <button
            onClick={() => downloadFile(file)}
            className="text-yellow-500 mt-1"
          >
            <MdFileDownload size={24} />
          </button>
          <button
            onClick={() => toggleFavorite(file._id, !file.isFavorite)}
            className="text-yellow-500"
          >
            {file.isFavorite ? <FaStar size={18} /> : <FaRegStar size={18} />}
          </button>
        </div>
        <div className="text-sm text-gray-600">
          <div>Size: {formatFileSize(file.attachmentRef?.size)}</div>
          <div>Date: {formatDateTime(file.attachmentRef?.createdAt)}</div>
          <div>Folder Name: {file.folderRef?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default FileItem;
