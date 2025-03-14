import React from "react";
import TextLogo from "../assets/technomantra.svg";
import TechnomantraLogo from "../assets/logo.png";

function Footer() {
  return (
    <div className="min-h-[70%] flex-center">
      <div className="flex-center flex-row">
        <div className="flex-center flex-row gap-3 p-4">
          <img
            loading="lazy"
            src={TechnomantraLogo}
            alt="Technomantra Logo"
            className="w-14 h-auto"
          />
          <img
            loading="lazy"
            src={TextLogo}
            alt="Text"
            className="w-60 h-auto"
          />
        </div>
        <div className="flex flex-col">
          <h1>Links</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="flex">
          <h1>Social Media Links</h1>
          <div className="flex flex-row"> 


          </div>
        </div>

        <div className="flex">
          <h1>Location</h1>
        </div>


      </div>
    </div>
  );
}

export default Footer;
