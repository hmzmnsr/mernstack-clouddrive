import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentFolders } from "../../redux/actions/folder.action";
import { AppDispatch } from "../../redux/reducers/store";
import { FolderType } from "../../utils/types";
import FlexContainer from "../containers/flex.container";
import FolderItem from "../lists/folder.item";
import Spinner from "../loaders/spinner.loader";

const RecentFolders: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [list, setList] = useState<FolderType[]>([]);

  const folderState = useSelector((state: any) => state.RecentFolder);

  const { list: folders, loading } = folderState;

  useEffect(() => {
    dispatch(getRecentFolders());
  }, [dispatch]);

  useEffect(() => {
    setList(folders ?? []);
  }, [folders]);

  return (
    <FlexContainer className="flex-col w-full">
      <div className="px-8 mt-4 text-lg font-bold tracking-wide font-sans leading-loose">
        Recent Folders
      </div>
      {loading ? (
        <Spinner className="my-10" />
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
