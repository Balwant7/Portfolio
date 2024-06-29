import { useState } from "react";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <h1 className="text-teal-300">hello js</h1> */}
      <Home />
    </>
  );
}

export default App;
