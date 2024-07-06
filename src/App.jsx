import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/ui/Footer";
import { Outlet } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

import "./App.css";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactLenis root>
        <Navbar />
        {/* <h1 className="text-teal-300">hello js</h1> */}
        <Outlet />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
