import React from 'react'
import ExpertLogo from "../assets/sponsor/Expert_Education.png"
import VCerpLogo from "../assets/sponsor/VCerp.png"
import EmpireLogo from "../assets/sponsor/Empire.png"

function Sponsors() {
  return (
    <div>
       <h1 className="text-center lg:text-7xl md:text-5xl sm:text-3xl text-xl zain-bold p-4">
          Sponsors
        </h1>

        <div className='flex-center flex-col'>
          <h1 className='text-center lg:text-4xl md:text-2xl text-xl zain-regular p-4'>Title Sponsor</h1>
          <img src={ExpertLogo} alt="Expert Logo" className='w-[500px]'  />
        </div>


        <div className='flex justify-around items-center m-4'>

          <div>
            <h1 className='text-center lg:text-3xl md:text-xl text-lg zain-regular p-4'>Placement Partner</h1>
            <img src={VCerpLogo} alt="" />

          </div>
          <div>
            <h1 className='text-center lg:text-3xl md:text-xl text-lg zain-regular p-4'>Other Sponsor</h1>
            <img src={EmpireLogo} alt="" className='w-64' />
          </div>

        </div>
      
    </div>
  )
}

export default Sponsors
