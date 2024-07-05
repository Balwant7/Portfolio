import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/ui/Footer";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <h1 className="text-teal-300">hello js</h1> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
