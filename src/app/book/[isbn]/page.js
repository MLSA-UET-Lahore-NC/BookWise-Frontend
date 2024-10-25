export default async function BookPage({ params }) {
    const { isbn } = params;
  
    // Fetch the specific book details using the ISBN from the params
    const res = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
    const book = await res.json();
  
    if (!res.ok) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
          <p className="text-xl font-semibold">Book not found!</p>
        </div>
      );
    }
  
    return (
      <div className="flex justify-center items-center bg-gray-900 min-h-screen text-white px-4">
        <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col lg:flex-row">
          {/* Book Image */}
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/3">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-auto object-cover rounded-md shadow-md"
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
            <div className="space-y-4">
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
  
            
          </div>
        </div>
      </div>
    );
  }
  