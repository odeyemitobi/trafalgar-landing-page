import React from "react";
import Mainlayout from "../../layouts/Mainlayout";
import ELEMENT from "../../Assets/pic/element.png";
import ELEMENT2 from "../../Assets/pic/element2.png";
import ELEMENT3 from "../../Assets/pic/element3.png";
import ELEMENT4 from "../../Assets/pic/element4.png";
import ELEMENT5 from "../../Assets/pic/element5.png";
import Consultbtn from "../../Component/Button/Consultbtn";
import Learnbtn from "../../Component/Button/Learnbtn";
import HEADER from "../../Assets/img/header1.png";
import HEADER2 from "../../Assets/img/header2.png";
import HEADER3 from "../../Assets/img/header3.png";
import VECTOR from "../../Assets/pic/Vector.png";
import MEDICINE from "../../Assets/img/Medicine.png";
import CONTACTS from "../../Assets/img/Contact.png";
import SEARCH from "../../Assets/img/Search.png";
import DETAILS from "../../Assets/img/Details.png";
import EMERGENCY from "../../Assets/img/Emergency.png";
import RECORD from "../../Assets/img/Record.png";
import Underline from "../../Component/Button/Underline";
import Downloadbtn from "./../../Component/Button/Downloadbtn";
import Whiteline from "../../Component/Button/Whiteline";
import EDWARD from "../../Assets/img/Edward.png";

function Trafalgar() {
  return (
    <Mainlayout>
      <div className="w-full">
        <img className="mt-[2.7%] absolute" src={ELEMENT} alt="" />
        <div className="w-full font-sans">
          <div className="w-full justify-between flex px-[9rem]">
            <div className="w-[40%] mt-[9rem] justify-between">
              <h1 className="text-5xl font-semibold">
                Virtual healthcare for you
              </h1>
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
          <div className="w-full px-[9rem] mt-[11rem] mb-3 ">
            <div className="w-full text-center">
              <h1 className="text-4xl font-semibold">Our services</h1>
              <div className="w-[7%] mr-auto ml-auto mt-9">
                <Underline />
              </div>
              <p className="text-lg mt-[3rem]">
                We provide to you the best choices for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
              </p>
            </div>
          </div>
          <div className=" w-full mt-3 flex absolute">
            <img className="w-[50%]" src={VECTOR} alt="" />
            <img
              className="w-[50%} h-[6rem] ml-auto mr-[9rem] mt-[16rem]"
              src={ELEMENT2}
              alt=""
            />
          </div>
          <div className="w-full mt-[4rem] px-[11rem] relative mb-5">
            <div className="flex justify-between">
              <div className="w-[30%] cursor-pointer text-left rounded-2xl px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl">
                <img className="h-[5rem]" src={SEARCH} alt="" />
                <h1 className=" text-2xl font-semibold mt-3">Search doctor</h1>
                <p className="text-base mt-3">
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
              <div className="w-[30%] cursor-pointer text-left rounded-2xl px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl">
                <img className="h-[5rem]" src={MEDICINE} alt="" />
                <h1 className=" text-2xl font-semibold mt-3">
                  Online pharmacy
                </h1>
                <p className="text-base mt-3">
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
              <div className="w-[30%] cursor-pointer text-left rounded-2xl px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl">
                <img className="h-[5rem]" src={CONTACTS} alt="" />
                <h1 className=" text-2xl font-semibold mt-3">Consultation</h1>
                <p className="text-base mt-3">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </div>
            <div className="flex mt-9 justify-between">
              <div className="w-[30%] cursor-pointer text-left rounded-2xl px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl">
                <img className="h-[5rem]" src={DETAILS} alt="" />
                <h1 className=" text-2xl font-semibold mt-3">Details info</h1>
                <p className="text-base mt-3">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
              <div className="w-[30%] cursor-pointer text-left rounded-2xl px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl">
                <img className="h-[5rem]" src={EMERGENCY} alt="" />
                <h1 className=" text-2xl font-semibold mt-3">Emergency care</h1>
                <p className="text-base mt-3">
                  You can get 24/7 urgent care for yourself or your children and
                  your lovely family
                </p>
              </div>
              <div className="w-[30%] cursor-pointer text-left rounded-2xl px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl">
                <img className="h-[5rem]" src={RECORD} alt="" />
                <h1 className=" text-2xl font-semibold mt-3">Tracking</h1>
                <p className="text-base mt-3">
                  Track and save your medical history and health data
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Learnbtn />
            </div>
          </div>
          <div className="w-full justify-between mt-[7rem] mb-5 flex pl-[5rem] pr-[9rem]">
            <div className="w-[50%] mt-[6rem]">
              <img
                className=" h-[90%] w-[100%] ml-auto block mr-auto"
                src={HEADER2}
                alt=""
              />
            </div>
            <div className="w-[40%] mt-[9rem] mb-[4rem] justify-between">
              <h1 className="text-5xl font-semibold">
                Leading healthcare providers
              </h1>
              <div className="w-[17%] mt-12">
                <Underline />
              </div>
              <p className=" w-[107%] mt-5 text-[21px] font-light leading-[32px]">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </p>
              <div className="mt-9">
                <Learnbtn />
              </div>
            </div>
          </div>
          <div className="w-full absolute">
            <img className="ml-auto" src={ELEMENT3} alt="" />
          </div>
          <div className="w-full justify-between mt-[7rem] mb-5 flex pl-[11rem] pr-[9rem]">
            <div className="w-[100%] mt-[9rem] mb-[4rem] justify-between">
              <h1 className="text-5xl font-semibold">
                Download our mobile apps
              </h1>
              <div className="w-[17%] mt-12">
                <Underline />
              </div>
              <p className=" w-[90%] mt-5 text-[21px] font-light leading-[32px]">
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                <br /> or administrative hassle) and securely
              </p>
              <div className="mt-9">
                <Downloadbtn />
              </div>
            </div>
            <div className="w-[100%] mt-[9rem]">
              <img
                className=" h-[90%] w-full ml-auto block mr-auto"
                src={HEADER3}
                alt=""
              />
            </div>
          </div>
          <div className="w-full mb-3 px-[7rem] mt-[25rem] absolute">
            <img className="h-18" src={ELEMENT4} alt="" />
          </div>
          <div className="pl-[10.5rem] pr-[12rem] mb-5 relative w-full mt-[10rem]">
            <div className="w-[100%] ed rounded-2xl text-center">
              <img
                className="ml-auto h-[4rem] block relative"
                src={ELEMENT5}
                alt=""
              />
              <div className="w-full pb-[5rem] ">
                <div className="text-3xl text-white font-semibold">
                  <h1>What our customer are saying</h1>
                </div>
                <div className="w-[7%] ml-auto mr-auto mt-9">
                  <Whiteline />
                </div>
                <div className="w-full mt-[3rem] flex justify-between px-14">
                  <div className="w-[50%]">
                    <img className="" src={EDWARD} alt="" />
                  </div>
                  <div className="w-[60%] text-left mt-10">
                    <h1 className="text-[21px] font-semibold text-white">Edward Newgate</h1>
                    <p className="text-lg font-normal text-white">Founder Circle</p>
                  </div>
                  <div className="w-[100%] text-left mt-4">
                    <p className="text-[19px] font-normal text-white">
                      “Our dedicated patient engagement app and web portal allow
                      you to access information instantaneously (no tedeous
                      form, long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Trafalgar;
