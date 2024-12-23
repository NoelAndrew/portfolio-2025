import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Portfolio</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-teal-500 hover:border-teal-500"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-500 mr-4"
          >
            About me
          </a>
          <a
            href="#experience"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-500 mr-4"
          >
            Work Experience
          </a>
          <a
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-500 mr-4"
          >
            Projects
          </a>
          <a
            href="#ft"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-500"
          >
            Featured Technologies
          </a>
        </div>
        <div>
          <a
            href="#contact"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
