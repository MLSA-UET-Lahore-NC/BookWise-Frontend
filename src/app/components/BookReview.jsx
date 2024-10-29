import React, { useState } from "react";

const BookReview = ({ book }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview || rating === 0) return;

    const review = {
      text: newReview,
      rating: rating,
      id: Date.now(),
    };

    setReviews([...reviews, review]);
    setNewReview("");
    setRating(0);
  };

  return (
    <div className="mx-auto max-w-xl p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">{book.title}</h1>
      <div className="flex justify-center mb-4">
        <img src={book.thumbnail} alt={book.title} className="w-52 h-64 rounded-md shadow-md" />
      </div>

      <form onSubmit={handleReviewSubmit} className="mt-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">Add a Review:</h2>
        <textarea
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white resize-none shadow-md focus:ring-2 focus:ring-slate-500"
          rows="4"
          placeholder="Write your review here..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>

        <label className="block mb-2 text-gray-400">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white shadow-md focus:ring-2 focus:ring-slate-500"
        >
          <option value={0}>Select a rating</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
        
        <button
          type="submit"
          className="w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 shadow-md"
        >
          Submit Review
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-200">Reviews:</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-700 py-4">
              <p className="text-lg font-semibold">Rating: {review.rating} Stars</p>
              <p className="text-gray-300">{review.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 mt-2">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default BookReview;
