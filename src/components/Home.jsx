import React from "react";
import calender from "../assets/calender.svg";
import location from "../assets/location.svg";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { GradientButton } from "@/components/ui/gradient-button"


function Home() {
  return (
    <div className="flex-center flex-col gap-16 md:gap-6 md:mt-10 mt-20 p-2 ">
      {/* <SparklesPreview /> */}

      <div className="md:text-7xl sm:text-5xl text-4xl lg:text-8xl font-bold text-center text-yellow-500 knewave-regular">
        TECHNOMANTRA
        <br />
        2k25
      </div>



      <div className="flex-center mt-10 gap-2 text-center items-end">
        <img src={calender} alt="Calender" className="w-5 md:w-8 h-auto" />
        <div className="flex-center">
          <p className="lg:text-3xl md:text-xl text-lg zain-regular">
            24th and 25th March
          </p>
        </div>
      </div>


      <div className="flex-center gap-1  text-3xl px-10 py-4 mx-auto">
        <img src={location} alt="" className="h-ato w-6 md:w-7" />
        <p className= "md:text-3xl text-sm zain-regular ">
          K S School of Business Management and Information Technology
        </p>
      </div>

      <div className="flex-center">
        <a href="https://tally.so/r/3xv6y9">
          <div className="relative justify-center">
          {/* <GradientButton>Register here</GradientButton> */}
          <button className="px-5 p-2 border text-2xl border-slate-400 bg-gray-950 text-gray-300 zain-bold rounded-xl">Register here</button>

          </div>
        </a>
      </div>


    </div>
  );
}

export default Home;
