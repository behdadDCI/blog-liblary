import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const SearchBox = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  return (
    <div
      className={`${
        isSearchBoxOpen ? "flex" : "hidden"
      }  justify-between w-full h-full bg-NEUTRAL200 rounded-lg px-5 items-center duration-200 -tracking-tighter`}
    >
      <div className="flex justify-center text-GRAY500 text-2xl font-bold  cursor-pointer">
        <AiOutlineSearch />
      </div>
      <input
        className="  py-6 rounded-lg  w-full h-full px-3 text-BACKGROUND_DARK text-lg font-Viga"
        type="text"
        placeholder="Search"
    
      />
      <div
        className="text-xl cursor-pointer"
     
      >
        <IoCloseSharp className=" text-BACKGROUND_DARK" />
      </div>
    </div>
  );
};

export default SearchBox;
