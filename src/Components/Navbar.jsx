import React from "react";
import logo from "../assets/image/logo.svg";
import sunIcon from "../assets/image/icon-sun.svg";

const Navbar = () => {
  return (
    <div className="bg-white/30 backdrop-blur-md py-2 px-3 rounded-lg">
      <div className="flex justify-between items-center">
        <img className="filter saturate-200" src={logo} alt="" />
        <img className="p-2 bg-white/15 rounded-md" src={sunIcon} alt="" />
        <h1>Hello from Navbar 🚀</h1>

      </div>
    </div>
  );
};

export default Navbar;
