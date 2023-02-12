import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import { navLinks } from "../Data";
import { close, menu } from "../public/assets";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import April from "../public/April.mp3";

const NavBar = () => {
  const [tottle, setTottle] = useState(false);

  return (
    <nav className="text-white w-full flex py-6 sm:py-8  sm:px-14 px-6 justify-between items-center navbar">
      <h2>
        <Link href="/" className="flex justify-center items-center gap-1">
          {/* BL
          <span className="text-yellow-300">O</span>G */}
          <img
            src="/profile2.jpg"
            alt="Ether"
            className="w-11 sm:w-14 rounded-full"
            // className="rounded-full h-52 w-52 sm:h-72 sm:w-72"
          />
          <h1 className="text-2xl sm:text-3xl font-bold">
            ET
            <span className="text-yellow-300">H</span>ER
          </h1>
        </Link>
      </h2>

      <div className="flex flex-row justify-center items-center z-10">
       

        <ul className="list-none hidden sm:flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`menu font-poppins flex justify-center items-center font-semibold cursor-pointer text-[20px] text-white hover ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center text-white">
      

        <Image
          src={tottle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain text-white"
          onClick={() => {
            setTottle((tog) => {
              return !tog;
            });
          }}
        />
        <div
          className={`${
            tottle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar text-white z-10`}
        >
          <ul className="list-none flex p-4 rounded-3xl  justify-end flex-col items-center flex-1 bg-pink-500 text-white  border-black">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins  cursor-pointer text-[16px] font-semibold text-white hover  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
