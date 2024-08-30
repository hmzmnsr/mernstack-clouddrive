import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-3/4 pt-3">
      <MagnifyingGlassIcon className="absolute left-3 top-8 transform -translate-y-1/2 h-6 w-6 text-black" />
      <input
        type="text"
        placeholder="Search..."
        className="pl-12 p-2 w-full rounded-md border text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-customBlueTwo"
      />
    </div>
  );
};

export default SearchBar;
