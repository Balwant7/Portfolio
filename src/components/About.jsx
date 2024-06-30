import React from "react";
import websiteDesign from "/icons/websiteDesig.svg";

const About = () => {
  return (
    <div id="about" className="px-4 md:px-10 mt-10 pb-5">
      <div id="para" className="">
        <h1 className="text-white mb-5 text-[3rem] ">
          <span className=" underline underline-offset-8 decoration-purple-500 ">
            About{" "}
          </span>
          me
        </h1>
        <p className="text-white text-[1.3rem] md:pr-10 lg:pr-24">
          I'm a web developer with hands-on experience in React.js. I recently
          completed a 3-month internship, where I contributed to building
          dynamic and responsive web applications. <br />
          What excites me the most about web development is the constant
          evolution and innovation within the field. I am always eager to learn
          new frameworks, improve my coding practices, and stay updated with the
          latest industry trends. My goal is to continuously grow as a developer
          and contribute to projects that make a positive impact.
          <br /> Outside of coding, I enjoy playing games. Feel free to reach
          me.
        </p>
      </div>
      <div id="whatIdo" className="mt-20">
        <h1 className="text-white text-3xl">What I'm doing</h1>
        <div
          id="sec"
          className="flex justify-evenly items-center mt-10 flex-wrap gap-4"
        >
          <div
            id="webdevelopemnt"
            className="bg-[#3D3D3D] rounded-lg p-7 flex gap-5 items-center justify-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={60}
                height={60}
                color={"#a855f7"}
                fill={"none"}
              >
                <path
                  d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16 8L17.2265 9.05719C17.7422 9.50163 18 9.72386 18 10C18 10.2761 17.7422 10.4984 17.2265 10.9428L16 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L6.77346 9.05719C6.25782 9.50163 6 9.72386 6 10C6 10.2761 6.25782 10.4984 6.77346 10.9428L8 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 7L11 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6557 22L14.2369 21.5811C13.2926 20.6369 13.0585 19.1944 13.6557 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9.00051 22L9.41937 21.5811C10.3636 20.6369 10.5977 19.1944 10.0005 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 22H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <h2 className="text-white text-xl font-bold mb-2">
                Web Development
              </h2>
              <p className="text-white">
                High-quality development of sites at professional level.
              </p>
            </div>
          </div>
          <div
            id="websitedesign"
            className="text-white bg-[#3D3D3D] rounded-lg p-7 flex gap-5 items-center justify-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={60}
                height={60}
                color={"#a855f7"}
                fill={"none"}
              >
                <path
                  d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18.8295 2.75418C19.1276 2.43123 19.2766 2.26976 19.435 2.17557C19.8171 1.9483 20.2876 1.94124 20.6761 2.15693C20.8372 2.24632 20.9908 2.40325 21.298 2.7171C21.6053 3.03096 21.7589 3.18789 21.8464 3.35237C22.0575 3.74925 22.0506 4.22992 21.8281 4.62028C21.7359 4.78206 21.5779 4.93431 21.2617 5.2388L17.5003 8.86172C16.9012 9.43875 16.6016 9.72727 16.2272 9.87349C15.8528 10.0197 15.4413 10.009 14.6181 9.98743L14.5062 9.9845C14.2556 9.97795 14.1303 9.97467 14.0574 9.89202C13.9846 9.80936 13.9945 9.68173 14.0144 9.42647L14.0252 9.28786C14.0812 8.56942 14.1092 8.2102 14.2495 7.88729C14.3898 7.56438 14.6318 7.30219 15.1158 6.7778L18.8295 2.75418Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6557 22L14.2369 21.5811C13.2926 20.6369 13.0585 19.1944 13.6557 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9.00051 22L9.41937 21.5811C10.3636 20.6369 10.5977 19.1944 10.0005 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 22H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 10H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="">
              <h2 className="text-white text-xl font-bold mb-2">Web Design</h2>
              <p className="text-white">
                The most modern and high quality design made at a professional
                level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
