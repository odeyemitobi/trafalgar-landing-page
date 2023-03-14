import React from "react";
import Mainlayout from "../../layouts/Mainlayout";
import ELEMENT from "../../Assets/pic/element.png";
import Consultbtn from "../../Component/Button/Consultbtn";
import HEADER from "../../Assets/img/header1.png";

function Trafalgar() {
  return (
    <Mainlayout>
      <div className="w-full">
        <img className="mt-[2.7%] absolute" src={ELEMENT} alt="" />
        <div className="w-full font-sans">
          <div className="w-full justify-between flex px-[9rem]">
            <div className="w-[40%] mt-[9rem] justify-between">
              <h1 className="text-5xl font-semibold">Virtual healthcare for you</h1>
              <p className=" w-[107%] mt-5 text-[21px] font-light leading-[32px]"> 
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <div className="mt-9">
                <Consultbtn />
              </div>
            </div>
            <div className="w-[50%] mt-[4rem]">
              <img className="h-[100%] mr-auto" src={HEADER} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Trafalgar;
