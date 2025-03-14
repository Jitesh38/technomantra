import React from "react";
import { Outlet } from "react-router";
import { Navbar, Footer } from "./components";
function Layout() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
