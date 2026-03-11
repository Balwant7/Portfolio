import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AlignLeft, X, GithubIcon, Linkedin } from "lucide-react";
import Cursor from "./Cursor";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <Cursor />

      {/* ── Backdrop – tapping outside closes the drawer ── */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={closeMenu}
        />
      )}

      {/* ── Mobile drawer ── */}
      <div
        className={`w-full sm:w-[75%] max-w-xs h-[100vh] bg-[#3D3D3D] fixed top-0 right-0 ease-in-out duration-[0.5s] z-30 flex flex-col px-6 pt-8
          ${toggle ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          className="self-end mb-8 text-white hover:text-[#0443F2] transition-colors duration-200 cursor-pointer"
          aria-label="Close menu"
        >
          <X size={30} />
        </button>

        {/* Nav links */}
        <div className="text-3xl flex flex-col gap-2">
          <Link
            className="p-3 text-white hover:text-[#0443F2] transition-colors duration-200"
            to="/"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className="p-3 text-white hover:text-[#0443F2] transition-colors duration-200"
            to="/project"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className="p-3 text-white hover:text-[#0443F2] transition-colors duration-200"
            onClick={closeMenu}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="p-3 text-white hover:text-[#0443F2] transition-colors duration-200"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-5 border-t border-white/20 mt-auto pb-10 pt-6">
          <Link
            className="bg-[#0443F2] shadow-2xl p-3 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
            to="https://github.com/Balwant7"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={22} />
          </Link>
          <Link
            className="bg-[#0443F2] shadow-2xl p-3 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
            to="https://www.linkedin.com/in/balwantsingh7"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={22} />
          </Link>
        </div>
      </div>

      {/* ── Top Navbar ── */}
      <div
        id="navbar"
        className="flex items-center justify-between w-full md:pl-[3rem] lg:pl-[10rem] px-6 md:px-0 h-[5rem] bg-black text-white sticky top-0 z-10"
      >
        {/* Logo */}
        <div className="mt-1">
          <Link to="/">
            <img src="./logos/favicon.png" alt="Logo" className="w-[6rem] sm:w-[7rem]" />
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="h-full hidden md:block">
          <div className="flex gap-10 lg:gap-16 text-lg lg:text-xl bg-[#3D3D3D] pr-[3rem] lg:pr-[10rem] h-full pl-4 justify-center items-center rounded-bl-2xl shadow-2xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-[#0443F2] ${isActive ? "text-[#0443F2]" : "text-white"}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-[#0443F2] ${isActive ? "text-[#0443F2]" : "text-white"}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-[#0443F2] ${isActive ? "text-[#0443F2]" : "text-white"}`
              }
              to="/resume"
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-[#0443F2] ${isActive ? "text-[#0443F2]" : "text-white"}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Hamburger button – mobile only */}
        <div className="md:hidden z-40">
          <button
            onClick={openMenu}
            className="text-white hover:text-[#0443F2] transition-colors duration-200 cursor-pointer"
            aria-label="Open menu"
          >
            <AlignLeft size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
