import React from "react";
import TextLogo from "../assets/technomantra.svg";

function Events() {
  return (
    <div>
      <div>
        <h1 className="text-center lg:text-7xl md:text-5xl sm:text-3xl text-xl zain-bold p-4">
          Event Details
        </h1>
      </div>

      <div>
        {/* Tech games */}
        <div>
          <h1 className="text-center lg:text-4xl md:text-2xl sm:text-xl text-lg zain-bold ">
            Technical Events
          </h1>
          <div className="p-10">
            <div className="bg-black h-60 w-72 rounded-lg  shadow-white shadow-sm flex-center flex-col gap-4">
              <img
                src={TextLogo}
                alt=""
                className="h-40 w-40 rounded-[50%] border border-white "
              />
              <p>Code Relay</p>
            </div>
          </div>
        </div>
        {/* Non tech games */}
        <div>
          <h1 className="text-center lg:text-4xl md:text-2xl sm:text-xl text-lg zain-bold">
            Non-Technical Events
          </h1>
          <div className="p-10">
            <div className="bg-black h-60 w-72 rounded-lg  shadow-white shadow-sm flex-center flex-col gap-4">
              <img
                src={TextLogo}
                alt=""
                className="h-40 w-40 rounded-[50%] border border-white "
              />
              <p>Code Relay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
