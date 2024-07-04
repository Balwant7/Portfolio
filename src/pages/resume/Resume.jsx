import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Resume = () => {
  return (
    <>
      <div
        id="resume"
        className="bg-black w-full h-[100vh] flex items-center justify-center"
      >
        <div id="resumewrapper" className="bg-[#3D3D3D] w-[90%] rounded-lg">
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
          <div id="skills">
            <h1 className="text-white">Skills</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
