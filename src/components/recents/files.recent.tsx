import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentFiles } from "../../redux/actions/file.action";
import { AppDispatch } from "../../redux/reducers/store";
import { FileData } from "../../utils/types";
import FlexContainer from "../containers/flex.container";
import RecentFileItem from "../lists/recent-file.item";

const RecentFiles: React.FC = () => {
  const [recentFiles, setRecentFiles] = useState<FileData[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const fileState = useSelector((state: any) => state.RecentFile);

  const { list: files } = fileState;

  useEffect(() => {
    dispatch(getRecentFiles());
  }, [dispatch]);

  useEffect(() => {
    setRecentFiles(files ?? []);
  }, [dispatch, files]);

  return (
    <FlexContainer className="w-full flex-col">
      <div className="px-8 pt-3 text-lg font-bold tracking-wide font-sans leading-loose">
        Recent Files
      </div>

      <div className="grid grid-cols-12 mt-3 bg-white">
        <div className="col-span-2 w-full h-full flex text-lg items-center justify-center font-semibold">
          Name
        </div>
        <div className="col-span-2 w-full h-full flex items-center justify-center text-lg font-semibold">
          File Size
        </div>
        <div className="col-span-3 w-full h-full flex items-center justify-center text-lg font-semibold">
          Last Modified
        </div>
        <div className="col-span-2 w-full h-full flex items-center justify-center text-lg font-semibold">
          Folder Name
        </div>
        <div className="col-span-3 w-full h-full flex items-center justify-center text-lg font-semibold">
          Who Can Access
        </div>
      </div>
      <div className="h-72 overflow-auto custom-scrollbar">
        {recentFiles.map((file, index) => (
          <RecentFileItem key={index} file={file} />
        ))}
      </div>
    </FlexContainer>
  );
};

export default RecentFiles;
