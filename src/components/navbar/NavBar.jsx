import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import "./NavBar.css";

const NavBar = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-gray-900" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="relative">
        <nav className="w-full p-2 flex items-center justify-between md:w-full">
          <Link to="/">
            <div className="mr-2 font-bold">Ikenna.Dev</div>
          </Link>
          <div className="text-lg flex items-center md:flex md:justify-center md:w-full">
            <ul className="hidden md:flex flex-row gap-3 text-lg font-medium md:gap-10">
              <li
                className={
                  active === "home"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li
                className={
                  active === "About"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li
                className={
                  active === "project"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li
                className={
                  active === "Articles"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link to="/articles" className="nav-link">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            {menuOpen ? (
              <div
                className="block text-2xl text-white md:hidden cursor-pointer z-50 bg-black rounded-lg p-1"
                onClick={closeMenu}
              >
                <MdClose />
              </div>
            ) : (
              <div
                className="block md:hidden cursor-pointer text-2xl bg-gray-200 rounded-lg p-1"
                onClick={toggleMenu}
              >
                <TiThMenuOutline />
              </div>
            )}
            {menuOpen && (
              <div className="fixed inset-0 bg-black opacity-70 z-40 md:hidden lg:hidden"></div>
            )}
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden absolute top-10 left-0 right-0 bg-transparent text-white rounded shadow-lg p-4 z-50 transition-all duration-500 ease-in-out">
            <ul className="flex flex-col items-center gap-3 text-lg">
              <li
                className={
                  active === "home"
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={closeMenu}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  active === "About"
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={closeMenu}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  active === "projects"
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={closeMenu}
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={
                  active === "articles"
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={closeMenu}
              >
                <Link to="/articles">Articles</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  active: PropTypes.string // Add the prop validation for 'active' prop
};

export default NavBar;
