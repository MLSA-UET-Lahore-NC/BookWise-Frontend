import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BookReview from "../../app/components/BookReview";
import BooksData from "../../app/components/BooksData"; 


const ReviewPage = () => {
  const router = useRouter();
  const { Id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (Id) {
      const foundBook = BooksData.find((b) => b.id === parseInt(Id));
      setBook(foundBook);
    }
  }, [Id]);

  if (!Id) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (!book) {
    return <p className="text-center text-white">Book not found</p>;
  }

  return (
    <div className="bg-yellow-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <BookReview book={book} />
      </div>
    </div>
  );
};

export default ReviewPage;
