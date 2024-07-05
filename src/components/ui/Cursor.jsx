import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Cursor = () => {
  const cr = useRef();

  useGSAP(() => {
    document.addEventListener("mousemove", (dets) => {
      gsap.to(".cursor", {
        x: dets.x,
        y: dets.y,
        duration: 1,
      });
    });
  });

  return (
    <div
      ref={cr}
      className="hidden lg:block cursor fixed h-4 w-4 bg-white z-[100000] border rounded-[50%] mix-blend-difference"
    ></div>
  );
};

export default Cursor;
