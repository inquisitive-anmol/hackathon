import React from "react";
import Doctor from "../Doctor/Doctor";
import Login from "../login/Login";
import Contact from "../contact/Contact";
import AboutUs from "../aboutus/AboutUs";

const home = () => {
  return (
    <>
      <div className="w-full  min-h-screen flex">
        <div className="left w-1/2 flex flex-col items-center justify-center ">
          <h1 className="text-5xl font-semibold">
            Virtual Healthcare
            <h1 className="text-5xl font-semibold">For You</h1>
          </h1>
          <div>
            <p className="text-xl mt-2 text-black/20 tracking-normal leading-5">
              Doc4U provides progressive, and affordable
              <p>healthcare, accessible on mobile and online</p>
              <p>for everyone</p>
            </p>
          </div>

          <div className=" w-[50%]">
            <button className="bg-[#458ff6] text-white/85 font-semibold p-3 mt-6 rounded-full">
              Consult Today
            </button>
          </div>
        </div>
        <div className="right w-1/2 mt-10">
          <img src="./illustration.svg" className="" alt="" />
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default home;
