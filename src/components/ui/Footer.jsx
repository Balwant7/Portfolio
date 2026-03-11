import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="w-full bg-black pt-10 px-[2rem] md:px-[5rem]">
      <div className="h-full w-full flex flex-col pt-[4rem] items-center justify-center border-t border-white/10">
        <div className="flex flex-col justify-center items-center w-full h-full px-4 md:px-10 text-center">
          <h3 className="text-white/70 text-base md:text-lg tracking-widest uppercase mb-2">
            Have a project in mind?
          </h3>
          <h1 className="text-white text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] leading-none font-semibold hover:text-[#0443F2] transition-colors duration-300">
            Let's Talk
          </h1>
        </div>
      </div>

      <div className="bg-black flex flex-col sm:flex-row lg:p-8 pt-12 pb-10 justify-center sm:justify-between items-center gap-6">
        {/* Social links */}
        <div className="flex gap-5 flex-wrap justify-center">
          <Link
            to="https://github.com/Balwant7"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white bg-transparent hover:bg-[#0443F2] hover:border-[#0443F2] transition-all duration-300 text-base font-medium"
          >
            Github
          </Link>
          <Link
            to="https://www.linkedin.com/in/balwantsingh7"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white bg-transparent hover:bg-[#0443F2] hover:border-[#0443F2] transition-all duration-300 text-base font-medium"
          >
            LinkedIn
          </Link>
        </div>

        {/* Credit */}
        <p className="text-white/50 text-xs text-center">
          Designed &amp; Developed by Balwant Singh
        </p>
      </div>
    </div>
  );
};

export default Footer;
