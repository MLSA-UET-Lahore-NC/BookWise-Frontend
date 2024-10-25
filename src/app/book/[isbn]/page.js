"use client"; // Indicates this is a client component
import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function BookPage({ params }) {
  const { isbn } = params; // Get the ISBN from the route params
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  // Fetch the specific book details using the ISBN from the params
  const fetchBook = async () => {
    const res = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
    const data = await res.json();
    if (res.ok) {
      setBook(data);
    } else {
      setBook(null); // Handle the case when the book is not found
    }
  };

  useEffect(() => {
    fetchBook();
  }, [isbn]);

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      const newComment = {
        text: commentText,
        date: new Date().toLocaleString(),
      };
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentText("");
    }
  };

  const name = "John Doe"; // Replace with the actual name

  return (
    <div className="container mx-auto p-4 text-white">
      {book ? (
        <div className="flex flex-col items-center">
          {/* Book Image */}
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/3">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-auto object-cover rounded-md shadow-md mb-4"
            />
          </div>

          {/* Book Details */}
          <div className="lg:w-2/3 lg:pl-6 flex flex-col justify-between">
            {/* Book Title */}
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">
              {book.title}
            </h1>

            {/* Book Subtitle */}
            <p className="text-lg text-gray-300 mb-6 italic">{book.subtitle}</p>

            {/* Book Details */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-400">
                <span className="font-semibold text-gray-100">Publisher:</span>{" "}
                {book.publisher}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-gray-100">Pages:</span> {book.pages}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-gray-100">Year:</span> {book.year}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-gray-100">ISBN-13:</span> {book.isbn13}
              </p>
            </div>

            {/* Comment Section */}
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
            <div
              className="shadow hover:shadow-xl rounded space-y-4"
              style={{
                borderColor: comments.length > 0 && "#373737",
                borderWidth: comments.length > 0 && "1px",
              }}
            >
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
                      <p className="text-sm text-gray-400">
                        {name} &bull; {comment.date}
                      </p>
                      <p className="text-base text-white">{comment.text}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
          <p className="text-xl font-semibold">Book not found!</p>
        </div>
      )}
    </div>
  );
}
