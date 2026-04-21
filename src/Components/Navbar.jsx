import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMod, setDarkMod }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  return (
    <nav className="sticky top-0 backdrop-blur-3xl z-10">
      <div className="flex justify-between items-center px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 py-5">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            Clove<span className="text-blue-700">X</span>
          </h1>
        </div>

        <div className="sm:hidden cursor-pointer text-2xl">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>

        <div className="h-auto hidden text-xl sm:flex sm:gap-10 md:gap-30 ">
          <a
            href="#home"
            onClick={() => setActive("home")}
            className={`pb-1 ${active === "home" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500 hover:border-b-2 hover:border-blue-500"}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setActive("about")}
            className={`pb-1 ${active === "about" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500 hover:border-b-2 hover:border-blue-500"}`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setActive("contact")}
            className={`pb-1 ${active === "contact" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500 hover:border-b-2 hover:border-blue-500"}`}
          >
            Contact
          </a>
        </div>

        <div
          className="cursor-pointer hidden sm:flex text-xl sm:text-2xl md:text-3xl"
          onClick={() => setDarkMod(!darkMod)}
        >
          {darkMod ? <FaSun className="text-yellow-300" /> : <FaMoon />}
        </div>
      </div>

      <div className="flex absolute w-full z-50 top-20  items-center justify-center ">
        {isOpen && (
          <div className="flex flex-col text-white text-xl bg-black rounded-4xl px-20 py-8 justify-center items-center gap-5 hover:text-blue-500">
            <a
              href="#home"
              onClick={() => setActive("home")}
              className={`pb-1 ${active === "home" ? "text-blue-500 border-b-2 border-blue-500" : "hover:text-blue-500 hover:border-b-2 hover:border-blue-500 "}`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setActive("about")}
              className={`pb-1 ${active === "about" ? "text-blue-500 border-b-2 border-blue-500" : "hover:border-b-2 hover:border-blue-500 "}`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setActive("contact")}
              className={`pb-1 ${active === "contact" ? "text-blue-500 border-b-2 border-blue-500" : "hover:border-b-2 hover:border-blue-500 "}`}
            >
              Contact
            </a>
            <div
              className="cursor-pointer text-xl sm:text-2xl md:text-3xl"
              onClick={() => setDarkMod(!darkMod)}
            >
              {darkMod ? <FaSun className="text-yellow-300" /> : <FaMoon />}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
