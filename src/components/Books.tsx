import { NavLink } from "react-router-dom";
import { getAllBooks } from "../data/db";

const Books = () => {
  const books = getAllBooks();
  return (
    <div>
      <ul className="text-blue-400 flex flex-col mt-12 gap-4 container px-8">
        {books.map((book) => (
          <div className="grid grid-row-2 md:grid-cols-2 gap-4 odd:bg-cyan-700 rounded-lg p-8 even:bg-blue-900">
            <div className="col-span-1 flex justify-center">
              <img className="h-full rounded-lg" src={book.imgUrl} alt="" />
            </div>
            <div className="flex flex-col justify-between col-span-1">
              <span className="text-center py-2 text-lg lg:text-3xl font-Viga text-red-400">{book.name}</span>
              <div className="flex justify-around text-3xl font-bold">
                <span>{book.due}</span>
                <span className="text-red-500">{book.amount}$</span>
              </div>
              <p className="px-6 text-gray-400 lg:text-xl">{book.desc.slice(0, 200)}...</p>
              <NavLink to={`/books/${book.id}`} className="w-full py-2 bg-orange-400 text-black text-center mt-6 rounded-lg">Show More</NavLink>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Books;
