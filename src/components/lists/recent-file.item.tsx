import { formatDateTime, formatFileSize } from "../../utils/helper";
import { FileData } from "../../utils/types";
import FileTypeIcon from "../icons/file-type.icon";

interface RecentFileItemProps {
  file: FileData;
}
const RecentFileItem = (props: RecentFileItemProps) => {
  const { file } = props;
  return (
    <div className="grid grid-cols-12 bg-white py-2">
      <div className="col-span-2 w-full h-full flex flex-col text-lg items-center justify-center">
        <div className="flex justify-center text-center mb-1">
          <FileTypeIcon type={file.attachmentRef?.type} />
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
