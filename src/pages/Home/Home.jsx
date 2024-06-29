import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <div className="relative" id="home">
        <div className="bg-black w-full h-[100vh] " id="spline">
          <Spline scene="https://prod.spline.design/gG1bWosuYzFTV9RX/scene.splinecode" />
        </div>
        <div className=" absolute top-[15%] md:top-[30%] left-[7%] md:left-[25%]">
          <h1 className="text-[4.2rem] md:text-[7rem] text-white font-bold">
            Hii👋 I'm
            <span className="text-black "> Balwant</span>
            <br />
            Web Developer
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
