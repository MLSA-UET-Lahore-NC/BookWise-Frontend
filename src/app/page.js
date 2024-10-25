
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const response = await fetch("https://api.itbook.store/1.0/search/science");
  const data = await response.json();
  const books = data.books;


  return (
    <div className="flex">
      {/* Search Sidebar */}
      <div className="w-64 p-4 ">
        <h2 className="text-xl font-bold mb-4 text-white">Search</h2>
        {/* Add your search elements here */}
      </div>

      {/* Books Listing */}
      <div className="flex-1 p-4">

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {
            books.length > 0 && books.map((book) => (
              <Link key={book.title} href={`/Book/${book.isbn13}`}>
                <div key={book.title} className="shadow hover:shadow-xl rounded " style={{ borderColor: "#373737", borderWidth: "1px" }}>

                  <img src={book.image} alt={book.title} />
                  <h3 className="text-md text-center mb-2 text-white line-clamp-1 overflow-hidden text-ellipsis px-1">
                    {book.title}
                  </h3>
                  <p className="text-gray-300 mb-2 text-center">Price: {book.price}</p>
                </div>

              </Link>
            ))
          }

        </div>
      </div>
    </div>
  );
}
