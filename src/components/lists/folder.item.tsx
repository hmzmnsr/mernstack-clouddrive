import { FaFolder } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PageUrls } from "../../utils/enums";
import { FolderType } from "../../utils/types";

const FolderItem = ({ folder }: { folder: FolderType }) => {
  const navigate = useNavigate();

  return (
    <div
      key={folder._id}
      className="flex-none w-48 flex flex-col items-center justify-center cursor-pointer p-2"
      onClick={() => {
        navigate(`${PageUrls.FOLDERS}/${folder._id}`);
      }}
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
