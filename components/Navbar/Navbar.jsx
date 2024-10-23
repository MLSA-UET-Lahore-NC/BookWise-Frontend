// components/Navbar.js
import React from "react";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className=" p-4" style={{ backgroundColor: "#282828" }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Website Name */}
        <div className="text-white text-xl flex items-center ">
          <img
            src="https://i.postimg.cc/HsMt563Q/logo2.png"
            alt=""
            width={50}
            height={50}
            className="mr-1"
          />
          KeazoN
          <span className="text-xs font-thin text-gray-500">BOOKS</span>{" "}
        </div>

        {/* Search Bar */}
        <div className="w-1/2 mx-4 relative">
          <input
            type="text"
            placeholder="Search for the book you want and read it now!"
            className="w-full p-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "#373737" }}
          />
          <GoSearch size={20} className="absolute left-2 top-2" color="white" />
        </div>

        {/* User Profile */}
        <div className="text-white">
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">Username</div>
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
