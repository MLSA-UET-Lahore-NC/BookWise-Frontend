"use client";

import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Page({ params }) {
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const name = "John Doe"; // Replace with actual user name

  useEffect(() => {
    async function fetchBook() {
      // Fetch details of the selected book using the isbn13
      const response = await fetch(`https://api.itbook.store/1.0/books/${params.id}`);
      const data = await response.json();
      setBook(data);
    }

    fetchBook();
  }, [params.id]);

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      const newComment = {
        text: commentText,
        date: new Date().toLocaleString(),
      };
      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  return (
    <div className="container mx-auto p-4 text-white">
      {book && (
        <div className="flex flex-col items-center">
          <img src={book.image} alt={book.title} className="w-full max-w-md" />
          <h1 className="text-xl font-bold">{book.title}</h1>
          <p className="text-lg">{book.subtitle}</p>
          <p>Authors: {book.authors}</p>
          <p>Price: {book.price}</p>
          <p>Description: {book.desc}</p>
        </div>
      )}

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        <div className="mb-4 flex items-center space-x-2">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a Comment"
            className="flex-grow p-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCommentSubmit}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            <FaPaperPlane />
          </button>
        </div>
        <div className="shadow hover:shadow-xl rounded space-y-4" style={{ borderColor: comments.length > 0 && "#373737", borderWidth: comments.length > 0 && "1px" }}>
          {comments
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((comment, index) => (
              <div key={index} className="flex">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white w-10 h-10 flex items-center justify-center rounded-full border-2 border-white">
                    {name[0]}
                  </h3>
                </div>
                <div className="flex-1 m-auto">
                  <p className="text-sm text-gray-400">{name} &bull; {comment.date}</p>
                  <p className="text-base text-white">{comment.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
