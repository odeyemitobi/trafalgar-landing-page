import React from "react";
import Mainlayout from "../../layouts/Mainlayout";
import ELIPSE from "../../Assets/img/Ellipse.png";
import TEE from "../../Assets/img/T.png";
import ELEMENT from "../../Assets/pic/element.png";
import ELEMENT2 from "../../Assets/pic/element2.png";
import ELEMENT3 from "../../Assets/pic/element3.png";
import ELEMENT4 from "../../Assets/pic/element4.png";
import ELEMENT5 from "../../Assets/pic/element5.png";
import ELEMENT6 from "../../Assets/pic/element6.png";
import ELEMENT7 from "../../Assets/pic/element7.png";
import ELEMENT8 from "../../Assets/pic/element8.png";
import SLIDER from "../../Assets/pic/slider.png";
import Consultbtn from "../../Component/Button/Consultbtn";
import Learnbtn from "../../Component/Button/Learnbtn";
import Viewbtn from "../../Component/Button/Viewbtn";
import HEADER from "../../Assets/img/header1.png";
import HEADER2 from "../../Assets/img/header2.png";
import HEADER3 from "../../Assets/img/header3.png";
import VECTOR from "../../Assets/pic/Vector.png";
import VECTOR2 from "../../Assets/pic/Vector2.png";
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
import DISEASE from "../../Assets/img/Diseaselab.png";
import HERBAL from "../../Assets/img/Herballab.png";
import SKIN from "../../Assets/img/Healthyskin.png";
import { HiArrowNarrowRight } from "react-icons/hi";

function Trafalgar() {
  return (
    <Mainlayout>
      <div className="w-full">
        <img
          className="h-[115px] md:mt-[2.7%] mt-[-9rem] absolute"
          data-aos="fade-right"
          data-aos-delay="400"
          src={ELEMENT}
          alt=""
        />
        <div className="w-full font-sans">
          <div className="w-full md:justify-between justify-center md:flex block md:px-[9rem] px-12">
            <div
              className="w-full mr-auto mt-[11rem]"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <h1 className="w-full text-5xl font-semibold">
                Virtual healthcare for you
              </h1>
              <p className=" w-[105%] mt-5 text-[18px] font-light leading-[32px]">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <div className="mt-9">
                <Consultbtn />
              </div>
            </div>
            <div
              className="md:w-[150%] w-full mt-[4rem]"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                className="h-[30rem] bg-center bg-cover"
                src={HEADER}
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:px-[9rem] px-7 mt-[11rem] mb-3 ">
            <div className="w-full text-center">
              <h1
                className="text-4xl font-semibold"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                Our services
              </h1>
              <div
                className="w-[7%] mr-auto ml-auto mt-9"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Underline />
              </div>
              <p
                className="text-lg mt-[3rem]"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                We provide to you the best choices for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
              </p>
            </div>
          </div>
          <div className=" w-full mt-3 flex absolute">
            <img
              className="w-[50%]"
              data-aos="fade-left"
              data-aos-delay="300"
              src={VECTOR}
              alt=""
            />
            <img
              className="w-[50%} h-[6rem] ml-auto mr-[9rem] mt-[16rem]"
              data-aos="fade-right"
              data-aos-delay="400"
              src={ELEMENT2}
              alt=""
            />
          </div>
          <div className="w-full mt-[4rem] md:px-[11rem] sm:px-7 px-14 relative mb-5">
            <div className="md:flex sm:flex block md:justify-between sm:justify-between center">
              <div
                className="md:w-[30%] sm:w-[30%] w-full cursor-pointer text-left rounded-2xl md:mb-0 mb-16 px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <img className="md:h-[5rem] h-[4rem]" src={SEARCH} alt="" />
                <h1 className=" md:text-2xl text-xl font-semibold mt-3">
                  Search doctor
                </h1>
                <p className="md:text-base text-sm mt-3">
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
              <div
                className="md:w-[30%] sm:w-[30%] w-full cursor-pointer text-left rounded-2xl md:mb-0 mb-16 px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <img className="md:h-[5rem] h-[4rem]" src={MEDICINE} alt="" />
                <h1 className=" md:text-2xl text-xl font-semibold mt-3">
                  Online pharmacy
                </h1>
                <p className="text-base mt-3">
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </p>
              </div>
              <div
                className="md:w-[30%] sm:w-[30%] w-full cursor-pointer text-left rounded-2xl md:mb-0 mb-16 px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <img className="md:h-[5rem] h-[4rem]" src={CONTACTS} alt="" />
                <h1 className=" md:text-2xl text-xl font-semibold mt-3">
                  Consultation
                </h1>
                <p className="md:text-base text-sm mt-3">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
            </div>
            <div className="md:flex sm:flex block md:justify-between sm:justify-between center">
              <div
                className="md:w-[30%] sm:w-[30%] w-full cursor-pointer text-left rounded-2xl md:mb-0 mb-16 px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <img className="md:h-[5rem] h-[4rem]" src={DETAILS} alt="" />
                <h1 className=" md:text-2xl text-xl font-semibold mt-3">
                  Details info
                </h1>
                <p className="md:text-base text-sm mt-3">
                  Free consultation with our trusted doctors and get the best
                  recomendations
                </p>
              </div>
              <div
                className="md:w-[30%] sm:w-[30%] w-full cursor-pointer text-left rounded-2xl md:mb-0 mb-16 px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img className="md:h-[5rem] h-[4rem]" src={EMERGENCY} alt="" />
                <h1 className=" md:text-2xl text-xl font-semibold mt-3">
                  Emergency care
                </h1>
                <p className="md:text-base text-sm mt-3">
                  You can get 24/7 urgent care for yourself or your children and
                  your lovely family
                </p>
              </div>
              <div
                className="md:w-[30%] sm:w-[30%] w-full cursor-pointer text-left rounded-2xl md:mb-0 mb-16 px-5 py-7 bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <img className="md:h-[5rem] h-[4rem]" src={RECORD} alt="" />
                <h1 className=" md:text-2xl text-xl font-semibold mt-3">
                  Tracking
                </h1>
                <p className="md:text-base text-sm mt-3">
                  Track and save your medical history and health data
                </p>
              </div>
            </div>
            <div
              className="text-center md:mt-12 mt-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Learnbtn />
            </div>
          </div>
          <div className="w-full md:justify-between justify-center mt-[7rem] mb-5 md:flex block md:pl-[5rem] md:pr-[9rem] px-[4rem]">
            <div
              className="md:w-[50%] w-full mt-[6rem]"
              data-aos="fade-right"
              data-aos-offset="400"
            >
              <img
                className=" h-[90%] w-[100%] bg-center bg-cover ml-auto block mr-auto"
                src={HEADER2}
                alt=""
              />
            </div>
            <div
              className="md:w-[40%] w-full mt-[9rem] mb-[4rem] md:justify-between justify-center"
              data-aos="fade-left"
              data-aos-offset="300"
            >
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
          <div
            className="w-full absolute"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <img className="ml-auto" src={ELEMENT3} alt="" />
          </div>
          <div className="w-full md:justify-between justify-center mt-[7rem] mb-5 md:flex block md:pl-[5rem] md:pr-[9rem] px-[4rem]">
            <div
              className="w-[100%] md:mt-[9rem] mt-[11rem] mb-[4rem] justify-between"
              data-aos="fade-right"
              data-aos-offset="300"
            >
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
            <div
              className="w-[100%] mt-[9rem]"
              data-aos="fade-left"
              data-aos-offset="400"
            >
              <img
                className=" h-[90%] w-full bg-center bg-cover ml-auto block mr-auto"
                src={HEADER3}
                alt=""
              />
            </div>
          </div>
          <div
            className="w-full mb-3 px-[7rem] mt-[25rem] absolute"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img className="h-18" src={ELEMENT4} alt="" />
          </div>
          <div
            className="md:pl-[10.5rem] pl-[2rem] md:pr-[12rem] pr-[2.5rem] mb-5 relative w-full mt-[10rem]"
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-delay="400"
          >
            <div className="w-[100%] ed rounded-2xl text-center">
              <img
                className="ml-auto md:h-[4rem] h-[3rem] relative"
                src={ELEMENT5}
                alt=""
              />
              <div className="w-full pb-[5rem] ">
                <div className="md:text-3xl text-2xl text-white font-semibold">
                  <h1>What our customer are saying</h1>
                </div>
                <div className="md:w-[7%] w-[15%] ml-auto mr-auto mt-9">
                  <Whiteline />
                </div>
                <div className="w-full mt-[3rem] md:flex md:justify-between justify-center px-14">
                  <div className="md:w-[50%]">
                    <img className="ml-auto mr-auto" src={EDWARD} alt="" />
                  </div>
                  <div className="md:w-[60%] w-full md:text-left text-center mt-10">
                    <h1 className="text-[21px] font-semibold text-white">
                      Edward Newgate
                    </h1>
                    <p className="text-lg font-normal text-white">
                      Founder Circle
                    </p>
                  </div>
                  <div className="w-[100%] md:text-left text-center mt-4">
                    <p className="text-[19px] font-normal text-white">
                      “Our dedicated patient engagement app and web portal allow
                      you to access information instantaneously (no tedeous
                      form, long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full cursor-pointer">
              <img className="ml-auto mr-auto mt-9" src={SLIDER} alt="" />
            </div>
          </div>
          <div
            className="w-full absolute"
            data-aos="fade-up"
            data-aos-offset="300"
          >
            <img className="pl-[8rem] mt-[16rem]" src={ELEMENT6} alt="" />
          </div>
          <div
            className="w-full absolute"
            data-aos="fade-down"
            data-aos-offset="400"
          >
            <img
              className="ml-auto h-[26rem] mt-[16rem]"
              src={VECTOR2}
              alt=""
            />
          </div>
          <div className="w-full md:px-[11rem] px-5 mt-[11rem] relative">
            <div
              className="w-full text-center"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="text-4xl font-semibold">
                <h1>Check out our latest article</h1>
              </div>
              <div className="w-[7%] mr-auto ml-auto mt-9">
                <Underline />
              </div>
            </div>
            <div className="w-full mt-[4rem] mb-9 md:flex block md:justify-between justify-center">
              <div
                className="md:w-[30%] w-full cursor-pointer text-left rounded-2xl bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <img
                  className="w-[100%] rounded-t-xl bg-center bg-cover"
                  src={DISEASE}
                  alt=""
                />
                <div className="px-6">
                  <h1 className=" text-xl font-semibold mt-3">
                    Disease detection, check up in the laboratory
                  </h1>
                  <p className="text-[15px] mb-5 mt-3">
                    In this case, the role of the health laboratory is very
                    important to do a disease detection...
                  </p>
                  <div className="text-[#4089ED] md:pb-0 pb-10 flex mb-4">
                    <p className="text-[#4089ED] font-medium text-base">
                      Read more
                    </p>
                    <div className="mt-[7px] pl-2">
                      <HiArrowNarrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="md:w-[30%] w-full cursor-pointer text-left rounded-2xl bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <img
                  className="w-[100%] rounded-t-xl bg-center bg-cover"
                  src={HERBAL}
                  alt=""
                />
                <div className="px-6 pb-5">
                  <h1 className=" text-[19px] font-semibold mt-3">
                    Herbal medicines that are safe for consumption
                  </h1>
                  <p className="text-[15px] mb-5 mt-3">
                    Herbal medicine is very widely used at this time because of
                    its very good for your health...
                  </p>
                  <div className="text-[#4089ED] flex mb-4">
                    <p className="text-[#4089ED] font-medium text-base">
                      Read more
                    </p>
                    <div className="mt-[7px] pl-2">
                      <HiArrowNarrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="md:w-[30%] w-full cursor-pointer md:mt-0 mt-4 text-left rounded-2xl bg-[#fff] shadow-xl hover:shadow-2xl"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <img
                  className="w-[100%] rounded-t-xl bg-center bg-cover"
                  src={SKIN}
                  alt=""
                />
                <div className="px-6">
                  <h1 className=" text-xl font-semibold mt-3">
                    Natural care for healthy facial skin
                  </h1>
                  <p className="text-[15px] mb-5 mt-3">
                    In this case, the role of the health laboratory is very
                    important to do a disease detection...
                  </p>
                  <div className="text-[#4089ED] flex md:pb-0 pb-10 mb-4">
                    <p className="text-[#4089ED] font-medium text-base">
                      Read more
                    </p>
                    <div className="mt-[7px] pl-2">
                      <HiArrowNarrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Viewbtn />
            </div>
          </div>
          <div
            className="w-full absolute md:mt-[5rem] mt-[7rem] px-[3rem]"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <img
              className="ml-auto md:h-[8rem] h-[4rem]"
              src={ELEMENT7}
              alt=""
            />
          </div>
          <div className="w-full mt-[11rem] relative ed">
            <div className="w-full md:text-left text-center md:px-[9rem] sm:pl-[13rem] pl-[10rem] pt-[5rem] md:justify-between justify-center md:flex">
              <div
                className=" w-[50%]"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="300"
              >
                <div className="w-full ">
                  <div className="w-full flex md:pl-0 sm:pl-12">
                    <div className="">
                      <div className=" absolute">
                        <img src={ELIPSE} alt="" />
                      </div>
                      <div className="relative">
                        <img className="mt-3 px-3" src={TEE} alt="" />
                      </div>
                    </div>
                    <div className="pl-3 mt-1 text-white font-semibold text-2xl">
                      <h1>Trafalgar</h1>
                    </div>
                  </div>
                  <div className="w-full mt-5">
                    <div className="md:w-[67%] w-full">
                      <p className="text-white text-[14px]">
                        Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online for everyone
                      </p>
                    </div>
                    <div className="mt-5 md:mb-0 mb-5">
                      <p className="text-white text-xs">
                        ©Trafalgar PTY LTD 2020. All rights reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] md:flex justify-between">
                <div
                  className="w-full "
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="500"
                >
                  <div className="w-full text-white">
                    <h1 className="font-semibold">Company</h1>
                    <div className="mt-5 md:mb-0 mb-5 text-sm leading-8">
                      <p className="text-white">About</p>
                      <p className="text-white">Testimonials</p>
                      <p className="text-white">Find a doctor</p>
                      <p className="text-white">Apps</p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="700"
                >
                  <div className="w-full text-white">
                    <h1 className="font-semibold">Region</h1>
                    <div className="mt-5 md:mb-0 mb-5 text-sm leading-8">
                      <p className="text-white">Indonesia</p>
                      <p className="text-white">Singapore</p>
                      <p className="text-white">Hongkong</p>
                      <p className="text-white">Canada</p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="900"
                >
                  <div className="w-full text-white">
                    <h1 className="font-semibold">Help</h1>
                    <div className="mt-5 text-sm leading-8">
                      <p className="text-white">Help center</p>
                      <p className="text-white">Contact support</p>
                      <p className="text-white">Instructions</p>
                      <p className="text-white">How it works</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-7"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
            >
              <img className="h-[4rem]" src={ELEMENT8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Trafalgar;
