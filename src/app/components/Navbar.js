import React from "react";
import { GoSearch } from "react-icons/go";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="p-4" style={{ backgroundColor: "#282828" }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Website Name */}
        <div className="text-white text-xl flex items-center">
          <img
            src="https://i.postimg.cc/HsMt563Q/logo2.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-1"
          />
          KeazoN
          <span className="text-xs font-thin text-gray-500">BOOKS</span>
        </div>

        {/* Search Bar */}
          <div className="relative mx-4 w-1/2"> {/* Adjusted width for elongation */}
            <SearchBar />
            <GoSearch size={24} className="absolute left-3 top-1.5 text-white" /> {/* Adjusted size and position */}
          </div>

        {/* User Profile */}
        <div className="text-white">
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">Username</div>
            {/* Uncomment to add profile image */}
            {/* <img
              src="/profile.jpg"
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
