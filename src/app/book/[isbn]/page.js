// src/app/book/[isbn]/page.js

export default async function BookPage({ params }) {
    const { isbn } = params;
  
    // Fetch the specific book details using the ISBN from the params
    const res = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
    const book = await res.json();
  
    if (!res.ok) {
      return <p>Book not found!</p>;
    }
  
    return (
      <div className="flex justify-center pt-10 bg-gray-800 min-h-screen text-white">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="mt-4">Author: {book.subtitle}</p>
          <p className="mt-2">Publisher: {book.publisher}</p>
          <p className="mt-2">Pages: {book.pages}</p>
          <p className="mt-2">Year: {book.year}</p>
          <p className="mt-2">ISBN-13: {book.isbn13}</p>
        </div>
      </div>
    );
  }
  