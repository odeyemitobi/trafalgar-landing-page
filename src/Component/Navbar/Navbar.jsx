import React, { useState } from "react";
import "../component.css";
import TRAFALGAR from "../../Assets/img/Trafalgar.png";

function Navbar() {
  let Link1 = [{ name: "Home", link: "/" }];

  let Links = [
    { name: "Find a doctor", link: "/" },
    { name: "Apps", link: "/" },
    { name: "Testimonials", link: "/" },
    { name: "About us", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div className="w-full top-1 left-0">
      <nav className="md:flex items-center justify-between py-8 md:px-[9rem] px-7">
        <div>
          <img src={TRAFALGAR} alt="" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute text-[#458FF6] right-8 top-11 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20, bg-[rgb(69,143,246)]  " : "top-[-490px]"
          }`}
        >
          {Link1.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
              <a
                href={link.link}
                className="text-[#1F1534] font-semibold hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}

          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
              <a
                href={link.link}
                className="text-[#7D7987] hover:text-[#1F1534] hover:font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
