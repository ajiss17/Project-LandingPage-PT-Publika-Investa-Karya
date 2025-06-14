import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "/assets/images/logopublika.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isProductActive =
    location.pathname === "/our-product" || location.pathname === "/our-project";

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-red-500 border-b-2 border-red-500"
      : "text-black hover:text-red-500";

  const activeClassDropdown = ({ isActive }) =>
    isActive
      ? "block text-red-500 hover:text-red-500 hover:bg-gray-100 px-4 py-2 rounded-lg border-b-2 border-red-500"
      : "block text-gray-800 hover:text-red-500 hover:bg-gray-100 px-4 py-2 rounded-lg";

  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md bg-white ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <span className="text-4xl font-bold text-red-500 font-[Offside]">
            PUBLIKA
          </span>
        </div>

        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul
          className={`md:flex md:space-x-8 text-lg font-bold absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 p-4 md:p-0 transition-all duration-300 ${
            isMenuOpen ? "top-20 shadow-lg" : "-top-96"
          }`}
        >
          <li>
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center cursor-pointer focus:outline-none ${
                isProductActive ? "text-red-500 border-b-2 border-red-500" : "text-black hover:text-red-500"
              }`}
            >
              Product
              <i className="ri-arrow-down-s-line ml-1"></i>
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-48 z-10 p-2 space-y-2">
                <li>
                  <NavLink to="/our-product" className={activeClassDropdown}>
                    Our Product
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/our-project" className={activeClassDropdown}>
                    Our Project
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/contact-us" className={activeClass}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={activeClass}>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <div className="mt-20"></div>
    </>
  );
};

export default Navbar;
