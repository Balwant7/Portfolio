import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AlignLeft, GithubIcon, Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const afternav = useRef();
  const handleicon = () => {
    if (!toggle) {
      afternav.current.style.right = "0%";
      setToggle(!toggle);
    } else {
      afternav.current.style.right = "-100%";
      setToggle(!toggle);
    }
  };
  return (
    <>
      <div
        className=" w-full h-[100vh] bg-[#3D3D3D] fixed right-[-100%] ease-in-out duration-500 z-10 px-5 pt-[7rem]"
        id="afternav"
        ref={afternav}
      >
        <div className="text-4xl mt-[50%] ml-[25%] mb-[3rem]">
          <h1 className="p-3 text-[#ffffff]">About</h1>
          <h1 className="p-3 text-white">Projects</h1>
          <h1 className="p-3 text-white">Resume</h1>
          <h1 className="p-3 text-white"> Contact</h1>
          {/* <h1 className="p-5 text-[#19182562]"> Contact</h1> */}
        </div>
        <div className=" flex  justify-center items-center gap-5 border-t-[1px]">
          <Link
            className="mt-5 bg-yellow-500 shadow-2xl p-3 rounded-full"
            to="https://github.com/Balwant7"
          >
            <GithubIcon />
          </Link>
          <Link
            className="mt-5 bg-yellow-500 shadow-2xl p-3 rounded-full"
            to="https://www.linkedin.com/in/balwantsingh7"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
      <div
        id="navbar"
        className="flex items-center justify-between w-full md:pl-[10rem] px-10 md:px-0 h-[5rem] bg-black text-white relative"
      >
        <div>leftlogo</div>
        <div className=" h-full hidden md:block">
          <div className="flex gap-16 text-xl bg-[#3D3D3D] pr-[3rem] lg:pr-[10rem] h-full pl-2 justify-center items-center rounded-bl-2xl shadow-2xl ">
            <Link className="hover:text-yellow-500">About</Link>
            <Link className="hover:text-yellow-500">Projects</Link>
            <Link className="hover:text-yellow-500">Resume</Link>
            <Link className="hover:text-yellow-500">Contact</Link>
          </div>
        </div>
        <div id="navicon" className="md:hidden z-20">
          <button onClick={handleicon}>
            <AlignLeft size={30} className="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
