import { useState } from "react";
import viteLogo from "/vite.svg";
import {
  Navbar,
  Home,
  About,
  Events,
  Sponsors,
  Gallery,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-black text-white">
      <div className="min-h-screen relative">       
        <Home />
      </div>
      <div className="min-h-screen ">
        <About />
      </div>
      <div className="min-h-screen ">
        <Events />
      </div>
      <div className="min-h-screen ">
        <Sponsors />
      </div>
      <div className="min-h-screen ">
        <Gallery />
      </div>
     
    </div>
  );
}

export default App;
