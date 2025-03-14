import React from "react";
import TextLogo from "../assets/technomantra.svg";
import TechnomantraLogo from "../assets/logo.png";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="sticky">
      <div className="flex flex-row gap-2 px-5 w-full">
        <div className="flex flex-row gap-3 p-4">
          <img
            loading="lazy"
            src={TechnomantraLogo}
            alt="Technomantra Logo"
            className="w-14 h-auto"
          />
          {/* <img
            loading="lazy"
            src={TextLogo}
            alt="Text"
            className="w-60 h-auto"
          /> */}
        </div>
        <div className="flex w-full justify-end items-center gap-2 px-4">
          <ul className="flex flex-row gap-3 text-xl rampart-one-regular ">
            <NavLink to={"/"}> <li className="cursor-pointer">Home</li></NavLink>
            <NavLink to={"/about"}> <li className="cursor-pointer">About</li></NavLink>
            <NavLink to={"/events"}> <li className="cursor-pointer">Events</li></NavLink>
            <NavLink to={"/gallery"}> <li className="cursor-pointer">Gallery</li></NavLink>
            <NavLink to={"/feedback"}> <li className="cursor-pointer">Feedback</li></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
