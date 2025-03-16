import React from "react";
import calender from "../assets/calender.svg";
import location from "../assets/location.svg";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function Home() {
  return (
    <div className="flex-center flex-col gap-20 md:gap-6 md:mt-10 mt-20 p-2 ">
      {/* <SparklesPreview /> */}

      <div className="md:text-7xl sm:text-5xl text-4xl lg:text-8xl font-bold text-center text-amber-700  rubik-iso-regular">
        TECHNOMANTRA
        <br />
        2k25
      </div>

      <div className="flex-center mt-10 gap-2 text-center items-end">
        <img src={calender} alt="Calender" className="w-8" />
        <div className="flex-center">
          <p className="lg:text-3xl md:text-xl text-lg orbitron-300">
            24th and 25th March
          </p>
        </div>
      </div>
      <div className="flex-center text-3xl gap-2 px-10 py-4">
        <img src={location} alt="" className="w-8" />
        <p className="lg:text-3xl md:text-lg text-lg orbitron-300">
          K S School of Business Management and Information Technology
        </p>
      </div>

      <div className="flex-center">
        <a href="https://tally.so/r/3xv6y9">
          <div className="relative justify-center dark">
            <InteractiveHoverButton>
              </InteractiveHoverButton>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
