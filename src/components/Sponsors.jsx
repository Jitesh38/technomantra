import React from "react";
import ExpertLogo from "../assets/sponsor/Expert_Education.png";
import VCerpLogo from "../assets/sponsor/VCerp.png";
import EmpireLogo from "../assets/sponsor/Empire.png";
import DragonLogo from "../assets/sponsor/Dragon1.png";

function Sponsors() {
  return (
    <div className="bg-black text-white py-12 px-4 zain-regular">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">Our Sponsors</h2>
      
        {/* Main Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400">Title Sponsor</h3>
            <img src={ExpertLogo} alt="Title Sponsor" className="w-56 mx-auto mt-4" />
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-400">Placement Partner</h3>
            <img src={VCerpLogo} alt="Placement Partner" className="w-56 mx-auto mt-4" />
          </div>
        </div>

        {/* Other Sponsors */}
        <h3 className="text-2xl font-semibold text-yellow-500 mt-12 mb-4">Other Sponsors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img src={DragonLogo} alt="Sponsor 1" className="w-auto mx-auto h-32" />
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <img src={EmpireLogo} alt="Sponsor 2" className="w-auto mx-auto h-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
