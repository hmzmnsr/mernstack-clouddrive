import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlexContainer from "../../../../components/containers/flex.container";
import FolderItem from "../../../../components/lists/folder.item";
import { getFolders } from "../../../../redux/actions/folder.action";
import { AppDispatch } from "../../../../redux/reducers/store";
import { FolderType } from "../../../../utils/types";

const RecentFolders: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [list, setList] = useState<FolderType[]>([]);

  const folderState = useSelector((state: any) => state.Folder);

  const { list: folders, isLoading: loading } = folderState;

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  useEffect(() => {
    if (folders?.length > 0) {
      const tempFolders = folders;
      // Reverse code here
      setList(tempFolders.slice(0, 10));
    } else {
      setList([]);
    }
  }, [folders]);

  return (
    <FlexContainer className="flex-col w-full">
      <div className="px-8 mt-4 text-lg font-bold tracking-wide font-sans leading-loose">
        Recent Folders
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : list.length === 0 ? (
        <div>No folders found. Please create a folder.</div>
      ) : (
        <FlexContainer className="w-full px-8 overflow-x-auto custom-scrollbar">
          {list.map((folder: FolderType) => (
            <FolderItem key={folder._id} folder={folder} />
          ))}
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default RecentFolders;
