import { FaFileAlt, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import FlexContainer from "../../components/containers/flex.container";

interface FileData {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  isFavorite: boolean;
  folderName: string;
}

const FavFiles = () => {
  const favoriteFiles: any[] = [];

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

  const downloadFile = (file: FileData) => {
    // Mock download function
    alert(`Downloading ${file.attachmentName}`);
  };

  return (
    <FlexContainer className="flex-col p-4">
      <div className="text-lg font-bold tracking-wide font-sans leading-loose col-span-10 pl-3 pb-3">
        Favorite Files
      </div>
      {favoriteFiles.length === 0 ? (
        <div>No favorite files found.</div>
      ) : (
        <FlexContainer className="pl-1 w-full flex-wrap z-10">
          {favoriteFiles.map((file, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <div className="mr-4">{getFileIcon(file.attachmentType)}</div>
                  <div className="flex-1 text-lg font-semibold">
                    {file.attachmentName}
                  </div>
                  <button
                    onClick={() => downloadFile(file)}
                    className="text-yellow-500 mt-1"
                  >
                    <MdFileDownload size={24} />
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <div>Size: {file.size} MB</div>
                  <div>Date: {file.dateTime}</div>
                  <div>Folder Name: {file.folderName}</div>
                </div>
              </div>
            </div>
          ))}
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default FavFiles;
