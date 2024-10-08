import React from "react";

const Map = () => {
  return (
    <div id="goolemap" className="w-full bg-[#3D3D3D] rounded-lg p-4 lg:p-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30150.59217786572!2d72.97411485806202!3d19.159178890714415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf523dd8b5ab%3A0x9de9a7f73961da61!2sAiroli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400708!5e0!3m2!1sen!2sin!4v1721576751156!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-lg h-[35vh] md:h-[50vh]"
      ></iframe>
    </div>
  );
};

export default Map;
