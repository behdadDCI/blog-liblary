import { FaBookJournalWhills } from "react-icons/fa6";
import { FaUserFriends, FaBars } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { BiSolidHomeSmile, BiSolidBookOpen } from "react-icons/bi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOnclick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section
      className={`bg-CURRENT_LINE h-full flex flex-col duration-500 ${
        isMenuOpen ? "w-16" : "w-16 lg:w-72"
      }`}
    >
{/* title */}
      <div className="flex items-center justify-around text-2xl border-b border-b-GRAY400 h-16">
        <div
          className={` items-center gap-1 justify-center font-Viga ${
            isMenuOpen ? "hidden" : "hidden lg:flex"
          }`}
        >
          <FaBookJournalWhills />
          <span className=" text-FOREGROUND">Behdad</span>
        </div>
        <div className=" cursor-pointer" onClick={handleMenuOnclick}>
          <FaBars />
        </div>
      </div>
{/* links */}
      <div className=" font-Viga">
        <NavLink to="/home" className="flex items-center gap-2 text-2xl px-4 py-4">
          <BiSolidHomeSmile />
          <span className={`${isMenuOpen?"hidden":"hidden lg:flex"}`}>Home</span>
        </NavLink>
        <NavLink to="books" className="flex items-center gap-2 text-2xl px-4 py-4">
          <BiSolidBookOpen />
          <span className={`${isMenuOpen?"hidden":"hidden lg:flex"}`}>All Books</span>
        </NavLink>{" "}
        <NavLink to="/contact" className="flex items-center gap-2 text-2xl px-4 py-4">
          <AiFillPhone />
          <span className={`${isMenuOpen?"hidden":"hidden lg:flex"}`}>Contact</span>
        </NavLink>{" "}
        <NavLink to="about" className="flex items-center gap-2 text-2xl px-4 py-4">
          <FaUserFriends className="" />
          <span className={`${isMenuOpen?"hidden":"hidden lg:flex"}`}>About</span>
        </NavLink>
      </div>
    </section>
  );
};

export default SideBar;
