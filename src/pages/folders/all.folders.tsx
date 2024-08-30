import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlexContainer from "../../components/containers/flex.container";
import FolderItem from "../../components/lists/folder.item";
import Spinner from "../../components/loaders/spinner.loader";
import { getFolders } from "../../redux/actions/folder.action";
import { AppDispatch } from "../../redux/reducers/store";
import { FileData, FolderType } from "../../utils/types";
import SelectFolder from "./selectfolders/select.folder";

const AllFolders: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const folderState = useSelector((state: any) => state.Folder);
  const fileState = useSelector((state: any) => state.File);

  const [selectedFolder, setSelectedFolder] = useState<FolderType | null>(null);

  const { list: folders, loading: loadingFolders } = folderState;
  const { list: files } = fileState;

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  const handleFolderClick = (folder: FolderType) => {
    setSelectedFolder(folder);
  };

  const handleReturn = () => {
    setSelectedFolder(null);
  };

  return (
    <FlexContainer className="flex-col p-4">
      {!selectedFolder ? (
        <>
          <div className="pb-2 pl-3 text-lg font-bold tracking-wide font-sans leading-loose">
            All Folders
          </div>
          {loadingFolders ? (
            <Spinner />
          ) : folders.length === 0 ? (
            <div>No folders found. Please create a folder.</div>
          ) : (
            <FlexContainer className="pl-1 w-full flex-wrap">
              {folders.map((folder: FolderType) => (
                <div key={folder._id} onClick={() => handleFolderClick(folder)}>
                  <FolderItem folder={folder} />
                </div>
              ))}
            </FlexContainer>
          )}
        </>
      ) : (
        <SelectFolder
          folder={selectedFolder}
          files={files.filter(
            (file: FileData) => file.folderRef?._id === selectedFolder._id
          )}
          onReturn={handleReturn}
        />
      )}
    </FlexContainer>
  );
};

export default AllFolders;
