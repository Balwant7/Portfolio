import React from "react";
import { GraduationCap } from "lucide-react";

const Resume = () => {
  return (
    <>
      <div
        id="resume"
        className="bg-black w-full h-[100vh] flex items-center justify-center"
      >
        <div
          id="resumewrapper"
          className="bg-[#3D3D3D] h-[90vh] w-[90%] rounded-lg"
        >
          <h1 className="text-white mb-5 text-[3rem] p-8 pl-12">
            <span className=" underline underline-offset-8 decoration-purple-500 ">
              Res
            </span>
            ume
          </h1>

          <div id="eduaction">
            <span className="flex ml-20 gap-4 items-center">
              <GraduationCap size={40} color="#a855f7" />
              <h1 className="text-3xl text-white">Education</h1>
            </span>
            <div id="graduation" className="ml-[8.5rem] mt-4">
              <ul className="list-disc decoration-purple-500 text-white">
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
        </div>
      </div>
    </>
  );
};

export default Resume;
