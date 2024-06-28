import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-black w-full h-[100vh] " id="spline">
          <Spline scene="https://prod.spline.design/gG1bWosuYzFTV9RX/scene.splinecode" />
        </div>
        <div className=" absolute top-[15%] md:top-[30%] left-[10%] md:left-[25%]">
          <h1 className="text-[5rem] md:text-[7rem] text-white font-bold">
            Hii👏 I'm{" "}
            <span className="text-purple-500 underline underline-offset-8 decoration-2 decoration-white">
              Balwant
            </span>{" "}
            <br />
            Web Developer
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
