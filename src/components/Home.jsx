import React from "react";
import {
  SparklesPreview,
  SparklesPreviewDark,
  SparklesPreviewColorful,
} from "../components/Demo";
import calender from "../assets/calender.svg";
import location from "../assets/location.svg"
import { GradientBtn } from "./GradientBtn";

function Home() {
  return (
    <div className="flex-center flex-col gap-6 ">
      {/* <SparklesPreview /> */}

      <div className="md:text-7xl sm:text-5xl text-3xl lg:text-8xl font-bold text-center text-amber-700 relative z-20 rubik-iso-regular">
        TECHNOMANTRA
        <br />
        2k25
      </div>

      <div className="flex-center mt-10 gap-2 text-center items-end">
        <img src={calender} alt="Calender" className="w-8" />
        <div className="flex-center">
          <p className="text-3xl orbitron-300">24th and 25th March</p>
        </div>
      </div>
      <div className="flex-center text-3xl orbitron-300 gap-2">
        <img src={location} alt="" className="w-8" />
        <p>K S School of Business Management and Information Technology</p>
      </div>

      <div className="flex-center">
        <GradientBtn>Register Now</GradientBtn>
      </div>
    </div>
  );
}

export default Home;
