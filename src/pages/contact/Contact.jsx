import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="projects"
      className="bg-black w-full  flex items-center justify-center pt-16 pb-24 "
    >
      <div className="bg-[#3D3D3D] w-[90%] rounded-lg pb-8">
        <h1 className="text-white mb-5 text-[3rem] p-8 md:pl-12">
          <span className=" underline underline-offset-8 decoration-[#0443F2] ">
            Cont
          </span>
          act
        </h1>
        <div className="flex flex-wrap pl-[0.4rem] lg:pl-[4rem]  flex-col items-start">
          <div className="flex gap-2 p-4 justify-center items-center">
            <span className="bg-black rounded-full p-3 md:p-4">
              <Phone color="white" />
            </span>
            <p className="text-lg lg:text-xl text-white">
              <a href="tel:+918268780350">+91 8268780350</a>
            </p>
          </div>
          <div className="flex gap-2 p-4 justify-center items-center">
            <span className="bg-black rounded-full p-3 md:p-4">
              <Mail color="white" />
            </span>
            <p className="text-lg lg:text-xl text-white">
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbFctjTJpjfnHzgVdlJrdphJPvwkwVxJScJTMspnpxzkdvWCTtqBgpPNRpTXHnfxzFBcJC">
                singhbalwant168@gmail.com
              </a>
            </p>
          </div>
          <div className="flex gap-2 p-4 justify-center items-center">
            <span className="bg-black rounded-full p-3 md:p-4">
              <MapPin color="white" />
            </span>
            <p className="text-lg lg:text-xl text-white">Mumbai, Maharashtra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
