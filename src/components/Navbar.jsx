import React, { useState } from "react";
import TextLogo from "../assets/technomantra.svg";
import TechnomantraLogo from "../assets/logo.png";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-black text-white p-4 zain-regular lg:text-3xl md:text-xl text-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold w-14 h-auto">
            <img src={TechnomantraLogo} alt="technomantra logo" />
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to={"/"}>
            <div className="hover:text-gray-400">
              Home
            </div>
            </NavLink>
            <NavLink to={"/about"}>
            <div className="hover:text-gray-400">
              About
            </div>
            </NavLink>
            <NavLink to={"/events"}>
            <div className="hover:text-gray-400">
              Events
            </div>
            </NavLink>
            <NavLink to={"/gallery"}>
            <div className="hover:text-gray-400">
              Gallery
            </div>
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <NavLink to={"/"}>
            <div className="hover:text-gray-400">
              Home
            </div>
            </NavLink>
            <NavLink to={"/about"}>
            <div className="hover:text-gray-400">
              About
            </div>
            </NavLink>
            <NavLink to={"/events"}>
            <div className="hover:text-gray-400">
              Events
            </div>
            </NavLink>
            <NavLink to={"/gallery"}>
            <div className="hover:text-gray-400">
              Gallery
            </div>
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
