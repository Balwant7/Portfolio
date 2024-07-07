import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="w-full bg-black  pt-10 px-[2rem] md:px-[5rem]">
      <div className="h-full w-full flex flex-col pt-[4rem] items-center justify-center border-t-[0.5px]">
        <div className="flex flex-col justify-center items-center w-full h-full px-20 md:px-10 ">
          <h3 className="text-white  left">Have a project in mind?</h3>
          <h1 className="text-white text-[7rem] md:text-[10rem]">LET'S TALK</h1>
        </div>
      </div>
      <div className="bg-black flex gap-8 p-8 pt-12" id="footer_social">
        <Link to="https://github.com/Balwant7">
          <button className="">Github</button>
          {/* <button className="bg-white rounded-full px-7 py-3">Github</button> */}
        </Link>
        <Link to="https://www.linkedin.com/in/balwantsingh7">
          {/* <button className="bg-white rounded-full px-7 py-3">Linkden</button> */}
          <button className="">Linkedln</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
