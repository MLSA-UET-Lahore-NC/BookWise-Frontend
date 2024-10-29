import React from 'react';

export default function Navbar() {
  return (
    <div className='flex flex-col items-center pt-3'>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="mb-3 w-full max-w-md p-2 bg-gray-700 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Navigation Links */}
      <div className='flex flex-row gap-5 justify-center pb-3 flex-wrap'>
        <h1 className="cursor-pointer hover:text-blue-500">Detective</h1>
        <h1 className="cursor-pointer hover:text-blue-500">Love</h1>
        <h1 className="cursor-pointer hover:text-blue-500">History</h1>
        <h1 className="cursor-pointer hover:text-blue-500">Science Fiction</h1>
        <h1 className="cursor-pointer hover:text-blue-500">Fantastic</h1>
        <h1 className="cursor-pointer hover:text-blue-500">More</h1>
      </div>
    </div>
  );
}
