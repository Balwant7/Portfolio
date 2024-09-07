import React from "react";
import Spline from "@splinetool/react-spline";
import About from "../../components/About";

const Home = () => {
  return (
    <>
      <div id="hoemwrap" className="bg-black">
        <div className="relative" id="home">
          <div className="bg-black w-full h-[85vh] " id="spline">
            <Spline scene="https://prod.spline.design/ItsTVJmUbwwDUhR0/scene.splinecode" />
          </div>
          <div className=" absolute top-[22%] md:top-[15%] lg:top-[30%] left-[14%] md:left-[25%]">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[7rem] text-white ">
              Hii👋 I'm
              <span className="text-white"> Balwant</span>
              <br />a ReactJs Developer
            </h1>
          </div>
        </div>
        <About />
      </div>
    </>
  );
};

export default Home;
