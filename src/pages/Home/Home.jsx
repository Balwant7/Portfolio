import Spline from "@splinetool/react-spline";
import About from "../../components/About";

const Home = () => {
  return (
    <>
      <div id="hoemwrap" className="bg-black">
        <div className="relative" id="home">
          {/* Spline 3D scene */}
          <div className="bg-black w-full h-[85vh]" id="spline">
            <Spline scene="https://prod.spline.design/ItsTVJmUbwwDUhR0/scene.splinecode" />
          </div>

          {/* Dark gradient overlay so text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />

          {/* Hero text */}
          <div className="absolute top-1/4 left-6 sm:left-12 md:left-[8%] lg:left-[14%] max-w-[90%] md:max-w-[60%]">
            <h1 className="text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] text-white leading-tight">
              Hii👋 I'm
              <br />
              <span className="text-[#0443F2]">Balwant</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white/80">
                A Frontend Developer
              </span>
            </h1>
          </div>
        </div>

        <About />
      </div>
    </>
  );
};

export default Home;
