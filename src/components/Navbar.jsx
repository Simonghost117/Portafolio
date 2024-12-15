import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-2 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger icon */}
        <button
          className="text-teal-400 text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        {/* Navigation links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 md:static absolute md:translate-x-0 top-12 left-0 w-full bg-gray-900 md:bg-transparent transition-transform duration-300 ease-in-out transform md:items-start md:justify-start md:p-0 p-4 shadow-lg md:shadow-none ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className="text-center md:text-left">
            <a href="#hero" className="block py-2 text-teal-300 hover:text-teal-400">Inicio</a>
          </li>
          <li className="text-center md:text-left">
            <a href="#about" className="block py-2 text-teal-300 hover:text-teal-400">Sobre mí</a>
          </li>
          <li className="text-center md:text-left">
            <a href="#projects" className="block py-2 text-teal-300 hover:text-teal-400">Proyectos</a>
          </li>
          <li className="text-center md:text-left">
            <a href="#contact" className="block py-2 text-teal-300 hover:text-teal-400">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
