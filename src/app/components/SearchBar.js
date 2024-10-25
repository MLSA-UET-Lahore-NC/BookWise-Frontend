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

  // Clear results and input when navigating
  const handleSuggestionClick = () => {
    setResults([]); // Clear search results
    setSearchQuery(""); // Clear search input
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ backgroundColor: 'rgb(55, 55, 55)' }} // Set background to rgb(55, 55, 55)
        className="w-full p-3 text-lg rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
      />

      {loading && <p className="text-gray-400 mt-2">Loading...</p>}

      {results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-gray-800 rounded-md shadow-lg text-gray-200">
          {results.map((book, index) => (
            <li key={index} className="p-3 border-b border-gray-700 hover:underline">
              <Link href={`/book/${book.isbn13}`} onClick={handleSuggestionClick}>
                {book.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; author: {book.subtitle}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
