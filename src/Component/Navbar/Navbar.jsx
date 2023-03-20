import React, { useState } from "react";
import "../component.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import TRAFALGAR from "../../Assets/img/Trafalgar.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto md:px-[9rem] px-12"
      data-aos="fade-down"
      data-aos-delay="1000"
    >
      <div>
        <img src={TRAFALGAR} alt="" />
      </div>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 text-[#1F1534] font-semibold">Home</li>
        <li className="p-4 text-[#7D7987] hover:text-[#1F1534] hover:font-semibold">
          Find a doctor
        </li>
        <li className="p-4 text-[#7D7987] hover:text-[#1F1534] hover:font-semibold">
          Apps
        </li>
        <li className="p-4 text-[#7D7987] hover:text-[#1F1534] hover:font-semibold">
          Testimonials
        </li>
        <li className="p-4 text-[#7D7987] hover:text-[#1F1534] hover:font-semibold">
          About us
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] h-full border-r border-r-gray-900 nat ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="m-4">
          <img src={TRAFALGAR} alt="" />
        </div>
        <li className="p-4 text-[#1F1534] font-semibold">Home</li>
        <li className="p-4  text-[#7D7987] hover:text-[#1F1534] hover:font-semibold">
          Find a doctor
        </li>
        <li className="p-4 text-[#7D7987] hover:text-[#1F1534] hover:font-semibold">
          Apps
        </li>
        <li className="p-4 text-[#7D7987] hover:text-[#1F1534] hover:font-semibold">
          Testimonials
        </li>
        <li className="p-4 text-[#7D7987] hover:text-[#1F1534] hover:font-semibold">
          About us
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
