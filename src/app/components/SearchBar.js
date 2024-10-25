"use client";

import { useState } from "react";
import Link from "next/link";

// Function to fetch book data from the API
const fetchBooks = async (query) => {
  const response = await fetch(`https://api.itbook.store/1.0/search/${query}`);
  const data = await response.json();
  return data.books || [];
};

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle search input
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const fetchedBooks = await fetchBooks(query);
      setResults(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      setResults([]);
    } finally {
      setLoading(false);
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

        {loading && <p className="text-gray-400 mt-2">Loading...</p>}

        {results.length > 0 && (
          <ul className="mt-4 bg-gray-700 rounded-md shadow-lg text-gray-200">
            {results.map((book, index) => (
              <li key={index} className="p-3 border-b border-gray-700 hover:underline">
                <Link href={`/book/${book.isbn13}`}>
                  {book.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; author: {book.subtitle}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
