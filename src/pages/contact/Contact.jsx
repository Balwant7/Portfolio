import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Map from "../../components/Map";

const contactItems = [
  {
    icon: <Phone color="white" size={20} />,
    label: "Phone",
    content: <a href="tel:+918268780350" className="hover:text-[#0443F2] transition-colors duration-200">+91 8268780350</a>,
  },
  {
    icon: <Mail color="white" size={20} />,
    label: "Email",
    content: (
      <a href="mailto:singhbalwant168@gmail.com" className="hover:text-[#0443F2] transition-colors duration-200 break-all">
        singhbalwant168@gmail.com
      </a>
    ),
  },
  {
    icon: <MapPin color="white" size={20} />,
    label: "Location",
    content: <span>Navi Mumbai, Maharashtra</span>,
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-black w-full flex items-center justify-center pt-16 pb-24 flex-col"
    >
      <div className="bg-[#3D3D3D] w-[90%] rounded-xl pb-8">
        <h1 className="text-white mb-5 text-[3rem] p-8 md:pl-12">
          <span className="underline underline-offset-8 decoration-[#0443F2]">
            Cont
          </span>
          act
        </h1>

        <div
          id="contact-info"
          className="flex flex-col gap-2 px-4 sm:px-8 lg:px-16 pb-4"
        >
          {contactItems.map(({ icon, label, content }) => (
            <div
              key={label}
              className="flex gap-4 p-4 items-center rounded-lg hover:bg-black/20 transition-colors duration-200 group"
            >
              <span className="bg-black rounded-full p-3 md:p-4 shrink-0 group-hover:bg-[#0443F2] transition-colors duration-200">
                {icon}
              </span>
              <p className="text-base lg:text-lg text-white">{content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="w-[90%] rounded-xl overflow-hidden mt-10 shadow-xl">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
