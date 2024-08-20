import { FaFolder } from "react-icons/fa";
import { FolderType } from "../../utils/types";

const FolderItem = ({ folder }: { folder: FolderType }) => {
  const handleRightClick = (event: React.MouseEvent, folderId: string) => {
    event.preventDefault();
  };

  return (
    <div
      key={folder._id}
      className="flex-none w-48 flex flex-col items-center justify-center cursor-pointer p-2"
      onContextMenu={(e) => handleRightClick(e, folder._id)}
    >
      <div className="bg-white h-full w-full py-10 mb-2 flex justify-center items-center flex-col shadow rounded-md">
        <div className="text-customBlueTwo rounded-m">
          <FaFolder className="text-7xl" />
        </div>
        <p className="text-center font-semibold">{folder.name}</p>
      </div>
    </div>
  );
};

export default FolderItem;
