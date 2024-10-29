import React from "react";
import Link from "next/link";

const BookThumbnail = ({ book }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg rounded-lg p-4 bg-gray-800">
      <img src={book.thumbnail} alt={book.title} style={{ width: "250px", height: "300px" }} />
      <Link href={`/review/${book.id}`} passHref>
        <button className="px-2 py-2 rounded-lg bg-slate-400 text-black mt-4">
          Review and Rate
        </button>
      </Link>
    </div>
  );
};

export default BookThumbnail;
