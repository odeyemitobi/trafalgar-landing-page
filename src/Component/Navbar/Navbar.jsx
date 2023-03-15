import React from "react";
import "../component.css";
import TRAFALGAR from "../../Assets/img/Trafalgar.png";

function Navbar() {
  return (
    <nav className="w-full pt-[2rem] px-[9rem] flex justify-between">
      <div className="">
        <img className="h-13" src={TRAFALGAR} alt="" />
      </div>
      <div className="w-[50%] text-[#7D7987] cursor-pointer font-normal text-[18px] pt-2 flex justify-between">
        <p className="hover:text-[#1F1534] hover:font-medium text-[#1F1534] font-medium">
          Home
        </p>
        <p className="hover:text-[#1F1534] hover:font-medium">Find a doctor</p>
        <p className="hover:text-[#1F1534] hover:font-medium">Apps</p>
        <p className="hover:text-[#1F1534] hover:font-medium">Testimonials</p>
        <p className="hover:text-[#1F1534] hover:font-medium">About us</p>
      </div>
    </nav>
  );
}

export default Navbar;
