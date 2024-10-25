"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [category, setCategory] = useState("java");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API based on the selected category
    async function fetchBooks() {
      const response = await fetch(`https://api.itbook.store/1.0/search/${category}`);
      const data = await response.json();
      setBooks(data.books || []); // Ensure fallback to an empty array
    }

    fetchBooks();
  }, [category]); // Fetch new books whenever the category changes

  return (
    <div className="flex">
      {/* Category Selection Sidebar */}
      <div className="w-64 p-4">
        <h2 className="text-xl font-bold mb-4 text-white">Select Category</h2>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
        >
          <option value="java">Java</option>
          <option value="social">Social</option>
          <option value="science">Science</option>
          <option value="programming">Programming</option>
          <option value="aws">AWS</option>
          <option value="devops">Devops</option>
          <option value="linux">Linux</option>
          <option value="python">Python</option>
          <option value="javascript">Javascript</option>
          <option value="dsa">DSA</option>
          <option value="blockchain">blockchain</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="github">Github</option>
          <option value="ml">ML</option>
          <option value="ai">AI</option>
          <option value="cloud">Cloud</option>
          <option value="html">Html</option>

          
        </select>
      </div>

      {/* Books Listing */}
      <div className="flex-1 p-4">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {
            books.length > 0 && books.map((book) => (
              <div className="border rounded border-[#373737] shadow hover:shadow-xl">
                <Link key={book.title} href={`/Book/${book.isbn13}`}>
                  <div key={book.title} className="">

                    <img src={book.image} alt={book.title} />
                    <h3 className="text-md text-center mb-2 text-white line-clamp-1 overflow-hidden text-ellipsis px-1">
                      {book.title}
                    </h3>
                    <p className="text-gray-300 mb-2 text-center">Price: {book.price}</p>
                  </div>
                </Link>
                <div className="text-center mb-2">
                  <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add To Wish List</button>
                </div>
              </div>
            ))
          }

          {books.length > 0 && books.map((book) => (
            <Link key={book.isbn13} href={`/Book/${book.isbn13}`}>
              <div className="shadow hover:shadow-xl rounded" style={{ borderColor: "#373737", borderWidth: "1px" }}>
                <img src={book.image} alt={book.title} />
                <h3 className="text-md text-center mb-2 text-white line-clamp-1 overflow-hidden text-ellipsis px-1">
                  {book.title}
                </h3>
                <p className="text-gray-300 mb-2 text-center">Price: {book.price}</p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}
