import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <div
        id="resume"
        className="bg-black w-full flex-col  flex items-center justify-center pt-16 pb-24"
      >
        <div
          id="resumewrapper"
          className="bg-[#3D3D3D] w-[90%] rounded-lg pb-10"
        >
          <h1 className="text-white mb-5 text-[3rem] p-8 md:pl-12">
            <span className=" underline underline-offset-8 decoration-[#0443F2] ">
              Res
            </span>
            ume
          </h1>

          <div id="eduaction">
            <span className="flex ml-6 md:ml-20 gap-4 items-center">
              <GraduationCap size={40} color="#0443F2" />
              <h1 className="text-3xl text-white">Education</h1>
            </span>
            <div id="graduation" className="ml-[6rem] md:ml-[8.5rem] mt-4">
              <ul className="list-disc  text-white">
                <li>
                  <h1 className="text-xl text-white">
                    {" "}
                    Bachelor of Engineering (Mumbai Unversity)
                  </h1>
                </li>
              </ul>
              <p className="text-white text-sm">2019-2023</p>
            </div>
          </div>
          <div id="experinece" className="mt-16">
            <span className="flex ml-6 md:ml-20 gap-4 items-center">
              <BookOpen size={40} color="#0443F2" />
              <h1 className="text-3xl text-white">Experience</h1>
            </span>
            <div id="experinece" className="ml-[6rem] md:ml-[8.5rem] mt-4">
              <ul className="list-disc  text-white">
                <li>
                  <h1 className="text-xl text-white">
                    {" "}
                    Agix International Pvt Ltd.
                  </h1>
                </li>
              </ul>
              <p className="text-white my-2">Web Developer Intern</p>
              <p className="text-white text-sm">03/2024 - 06/2024</p>
            </div>
          </div>
          <div
            id="skills"
            className="w-full ml-[1rem] md:ml-[4.5rem] mt-[4rem]"
          >
            <h1 className="text-white text-[2rem]">My Skills</h1>
            <div className="w-[90%] mt-7">
              <h2 className="text-white mb-2">FrontEnd Development</h2>
              <div className="w-full rounded-lg h-3 bg-white">
                <div className="w-[85%] h-3 bg-[#0443F2] rounded-lg"></div>
              </div>
            </div>
            <div className="w-[90%] mt-7">
              <h2 className="text-white mb-2">Backend Development</h2>
              <div className="w-full rounded-lg h-3 bg-white">
                <div className="w-[70%] h-3 bg-[#0443F2] rounded-lg"></div>
              </div>
            </div>
            <div className="w-[90%] mt-7">
              <h2 className="text-white mb-2">Data base</h2>
              <div className="w-full rounded-lg h-3 bg-white">
                <div className="w-[60%] h-3 bg-[#0443F2] rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <button className="text-white bg-[#0443F2] px-4 py-3 mt-16 rounded-sm active:bg-[#203777]">
          <a href="./Balwant_Singh_Resume.pdf" download="Balwant's resume">
            Download Resume
          </a>
        </button>
      </div>
    </>
  );
};

export default Resume;
