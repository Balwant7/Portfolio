import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "../../components/ui/Navbar";
import About from "../../components/About";

const Home = () => {
  return (
    <>
      <div id="hoemwrap" className="bg-black">
        <Navbar />
        <div className="relative" id="home">
          <div className="bg-black w-full h-[100vh] " id="spline">
            <Spline scene="https://prod.spline.design/ljpNZWVkkKzCQNVF/scene.splinecode" />
          </div>
          <div className=" absolute top-[15%] md:top-[30%] left-[7%] md:left-[25%]">
            <h1 className="text-[4.2rem] md:text-[7rem] text-white font-bold">
              Hii👋 I'm
              <span className="text-white "> Balwant</span>
              <br />
              Web Developer
            </h1>
          </div>
        </div>
        <About />
      </div>
    </>
  );
};

export default Home;
