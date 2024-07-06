import React from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
  const projectss = [
    {
      name: "Agix Uea",
      desc: "Single page web application",
      img: "./images/projectsimg/AgixUaeProject.png",
      link: "https://agixxuae.netlify.app/",
    },
    {
      name: "Laelko",
      desc: "Landing page",
      img: "./images/projectsimg/laelkobannerss.png",
      link: "https://www.laelko.com/",
    },
    {
      name: "Myntra Clone",
      desc: "E-commerce Website",
      img: "./images/projectsimg/myntraProject.png",
      link: "https://myntraclone-nu.vercel.app/",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="bg-black w-full  flex items-center justify-center pt-16 pb-24 "
      >
        <div className="bg-[#3D3D3D] w-[90%] rounded-lg ">
          <h1 className="text-white mb-5 text-[3rem] p-8 md:pl-12">
            <span className=" underline underline-offset-8 decoration-[#0443F2] ">
              Proje
            </span>
            cts
          </h1>
          <div className="flex flex-wrap px-3 md:px-10 lg:gap-[10rem] justify-center">
            {projectss.map((p, i) => {
              return (
                <div
                  className="bg-black  w-[27rem] rounded-lg relative mb-[8rem]"
                  key={i}
                >
                  <Link id="projlist" className="" to={p.link} target="_blank">
                    <span
                      className="absolute left-[45%] top-[45%] z-10"
                      id="eyeicon"
                    >
                      <Eye color="black" size={40} />
                    </span>
                    <img
                      src={p.img}
                      alt=""
                      className="w-full h-full rounded-lg hover:blur-sm transition ease-in-out"
                    />
                  </Link>
                  <Link
                    className="text-center text-2xl text-white mt-3 flex mb-1 justify-center"
                    to={p.link}
                  >
                    {p.name}
                  </Link>
                  <h2 className="text-white text-center">{p.desc}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
