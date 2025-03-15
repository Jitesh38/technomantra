import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import TextLogo from "../assets/technomantra.svg";
import TechnomantraLogo from "../assets/logo.png";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 zain-regular">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-32 mx-auto md:mx-0" />
        </div>

        {/* Links Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-bold text-orange-500">Links</h3>
          <ul className="space-y-2">
          <NavLink to={"/"}>
            <li>
              <div className="hover:text-gray-400">
                Home
              </div>
            </li>
            </NavLink>
            <NavLink to={"/about"}>

            <li>
              <div className="hover:text-gray-400">
                About
              </div>
            </li>
            </NavLink>
            <NavLink to={"/events"}>

            <li>
              <div className="hover:text-gray-400">
                Events
              </div>
            </li>
            </NavLink>
            <NavLink to={"/certificate"}>

            <li>
              <div className="hover:text-gray-400">
                Certificate
              </div>
            </li>
            </NavLink>
            <NavLink to={"/gallery"}>

            <li>
              <div className="hover:text-gray-400">
                Gallery
              </div>              
            </li>
            </NavLink>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-6 md:mb-0">
          <h3 className="text-lg font-bold text-orange-500">Social Media</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <FaInstagram
              size={28}
              className="hover:text-gray-400 cursor-pointer"
            />
            <FaLinkedin
              size={28}
              className="hover:text-gray-400 cursor-pointer"
            />
            <FaFacebook
              size={28}
              className="hover:text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-orange-500">Location</h3>
          <p className="max-w-xs">
            K S School of Business Management & Information Technology, Gujarat
            University
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm">
        © 2024-2025 Technomantra, All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
