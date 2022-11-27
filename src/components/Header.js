import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Blogs", "/blogs"],
  ];

  return (
    <>
      <header className="bg-gray-100 py-2 shadow-sm">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="flash-back" className="w-36 lg:w-44" />
              </Link>
            </div>
            <div className="nav_link">
              <nav className="flex sm:justify-center items-center space-x-4">
                {navItems.map(([title, url], index) => (
                  <NavLink
                    to={url}
                    key={index}
                    className={({ isActive }) =>
                      isActive
                      ? "rounded-lg px-3 py-2 font-medium bg-teal-300 text-slate-900"
                      : "rounded-lg px-3 py-2  text-slate-700 font-medium hover:bg-teal-300 hover:text-black my-1"
                    }
                  >
                    {title}
                  </NavLink>
                ))}
                <Link to="/login">
                  <button className="py-2 px-4 text-white font-semibold bg-red-600 rounded hover:bg-red-700">
                    Login
                  </button>
                </Link>
              </nav>
            </div>

            {/* Responsive */}

            <button
              className="p-2 -mr-1 transition duration-200 text-2xl lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <GrClose /> : <GiHamburgerMenu />}
            </button>
            <Link to="/login" className="lg:hidden">
              <button className="py-2 px-4 text-white font-semibold bg-red-600 rounded hover:bg-red-700 ">
                Login
              </button>
            </Link>
          </div>
          <div className="bg-gray-200 w-full">
            {isOpen && <hr className="my-2" />}
            {isOpen && (
              <nav className="flex_nav">
                {navItems.map(([title, url], index) => (
                  <NavLink
                    to={url}
                    key={index}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                      ? "rounded-lg px-3 py-2 font-medium bg-teal-300 text-slate-900"
                      : "rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-teal-300 hover:text-black my-1"
                    }
                  >
                    {title}
                  </NavLink>
                ))}
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
