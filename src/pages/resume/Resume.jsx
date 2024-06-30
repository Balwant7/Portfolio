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
        </div>
      </div>
    </>
  );
};

export default Resume;
