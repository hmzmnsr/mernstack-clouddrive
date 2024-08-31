import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlexContainer from "../../components/containers/flex.container";
import FolderItem from "../../components/lists/folder.item";
import Spinner from "../../components/loaders/spinner.loader";
import { getFolders } from "../../redux/actions/folder.action";
import { AppDispatch } from "../../redux/reducers/store";
import { FolderType } from "../../utils/types";

const FoldersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const folderState = useSelector((state: any) => state.Folder);

  const { list: folders, loading: loadingFolders } = folderState;

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  return (
    <FlexContainer className="flex-col p-4">
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
            <FolderItem key={folder._id} folder={folder} />
          ))}
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default FoldersPage;
