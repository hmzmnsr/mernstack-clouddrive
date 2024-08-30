import React from "react";

import NavigationButtons from "../buttons/navigation.button";
import SearchBar from "../inputs/search.input";
import ProfileName from "./profile";

const TopNavigation: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-12 py-2 pb-4 bg-white shadow">
      <div className="col-span-5">
        <ProfileName />
      </div>
      <div className="col-span-5">
        <SearchBar />
      </div>
      <div className="col-span-2">
        <NavigationButtons />
      </div>
    </div>
  );
};

export default TopNavigation;
