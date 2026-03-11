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
      link: "https://laelko.com/furniture/",
    },
    {
      name: "Myntra Clone",
      desc: "E-commerce Website",
      img: "./images/projectsimg/myntraProject.png",
      link: "https://myntraclone-nu.vercel.app/",
    },
    {
      name: "Tomato Food Delivery",
      desc: "E-commerce Website",
      img: "./images/projectsimg/tomato.png",
      link: "https://tomatofooddeliveryy.netlify.app/",
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="bg-black w-full flex items-center justify-center pt-16 pb-24"
      >
        <div className="bg-[#3D3D3D] w-[90%] rounded-xl">
          <h1 className="text-white mb-5 text-[3rem] p-8 md:pl-12">
            <span className="underline underline-offset-8 decoration-[#0443F2]">
              Proje
            </span>
            cts
          </h1>

          <div className="flex flex-wrap px-4 md:px-10 gap-10 lg:gap-14 justify-center pb-10">
            {projectss.map((p, i) => (
              <div
                className="bg-black w-full max-w-[27rem] rounded-xl relative mb-6 group overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                key={i}
              >
                {/* Image + Eye overlay */}
                <Link id="projlist" to={p.link} target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-xl">
                  {/* Centered eye icon */}
                  <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye color="white" size={44} />
                  </span>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-[14rem] object-cover rounded-xl group-hover:blur-sm group-hover:scale-105 transition-all duration-300"
                  />
                </Link>

                {/* Title & description */}
                <div className="pt-4 pb-2 px-3 text-center">
                  <Link
                    className="text-xl text-white font-semibold hover:text-[#0443F2] transition-colors duration-200"
                    to={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.name}
                  </Link>
                  <p className="text-white/60 text-sm mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
