import  { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getBookById } from "../data/db";
import { NavLink } from "react-router-dom";

const Book = () => {
  const { idBook } = useContext(AppContext);
  const book = getBookById(idBook);
  if (book) {
    return (
      <div>
        <ul className="text-white flex flex-col gap-4 container px-8">
          <div className="flex flex-col items-center odd:bg-slate-500 even:bg-slate-600  my-3 rounded-lg overflow-hidden w-full">
            <div className="w-3/4 md:w-1/3 lg:w-1/5 xl:w-64">
              <img
                className="h-full rounded-lg my-8"
                src={book?.imgUrl}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-center py-2 text-lg lg:text-3xl font-Viga text-red-400">
                {book?.name}
              </span>
              <div className="flex justify-around text-3xl font-bold">
                <span>{book?.due}</span>
                <span className="text-red-500">{book?.amount}$</span>
              </div>
              <p className="px-6 text-gray-400 lg:text-xl">{book?.desc}...</p>
              <NavLink className="text-center px-8 py-2 bg-red-300" to="/">
                Back
              </NavLink>
            </div>
          </div>
        </ul>
      </div>
    );
  } else return <div>Not Found Book</div>;
};

export default Book;
