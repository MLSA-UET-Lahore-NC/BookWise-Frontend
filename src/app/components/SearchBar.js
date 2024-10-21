"use client";

import { useState } from "react";

// Sample book data stored in a Map
const books = new Map();
books.set(1, {
  title: "Harry Potter and The Deathly Hollows 1",
  author: "J. K. Rowling",
  series: "Harry Potter",
  number: 6,
});
books.set(2, {
  title: "Harry Potter and The Goblet of Fire",
  author: "J. K. Rowling",
  series: "Harry Potter",
  number: 4,
});
books.set(3, {
  title: "Harry Potter and The Prisoner of Azkaban",
  author: "J. K. Rowling",
  series: "Harry Potter",
  number: 3,
});
books.set(4, {
  title: "Harry Potter and Chambers of Secret",
  author: "J. K. Rowling",
  series: "Harry Potter",
  number: 2,
});
books.set(5, {
  title: "Harry Potter and The Philosophers Stone",
  author: "J. K. Rowling",
  series: "Harry Potter",
  number: 1,
});
books.set(7, {
  title: "Harry Potter and The Order of Phoenix",
  author: "J. K. Rowling",
  series: "Harry Potter",
  number: 5,
});
books.set(8, {
  title: "Harry Potter and The Deathly Hollows 2",
  author: "J. K. Rowling",
  series: "Harry Potter",
  number: 6,
});

// Fuzzy search function
const fuzzySearch = (query, books) => {
  const queryTokens = query.toLowerCase().split(" ");

  return [...books.values()].filter((book) => {
    const titleTokens = book.title.toLowerCase().split(" ");
    return queryTokens.every((qt) =>
      titleTokens.some((tt) => tt.startsWith(qt))
    );
  });
};

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setResults([]);
    } else {
      const filteredBooks = fuzzySearch(query, books);
      setResults(filteredBooks);
    }
  };

  return (
    <div className="flex justify-center pt-10 bg-gray-800 min-h-screen">

      <div className="w-full max-w-lg">
        <input
          type="text"
          placeholder="Search for a book..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 text-lg rounded-md bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        {results.length > 0 && (
          <ul className="mt-4 bg-gray-700 rounded-md shadow-lg text-gray-200">
            {results.map((book, index) => (
              <li key={index} className="p-3 border-b border-gray-700">
                {book.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; author: {book.author}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
