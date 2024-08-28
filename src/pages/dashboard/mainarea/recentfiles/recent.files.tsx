import React from "react";
import FlexContainer from "../../../../components/containers/flex.container";
import FilesViewArea from "./recent.files.view";

const RecentFiles: React.FC = () => {
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

      <FilesViewArea />
    </FlexContainer>
  );
};

export default RecentFiles;
