import React from "react";

const Section = () => {
  return (
    <div className=" relative px-4 md:px-24 pt-20">
        <div className=" hidden md:block -top-28 absolute opacity-40 w-[514px] h-[648px] rotate-12 left-[-172px]">
            <img src="/4b05519abe2cf568f1a0d67434dd700d.png" alt="" />
        </div>
      <div className=" block md:flex justify-between items-center">
        <div className=" w-full md:w-[60%] mt-10 md:mb-0 mb-10">
          <h1 className="text-[40px] font-[600] font-[Righteous]">
            Discover The True Meaning <br /> Of Taste
          </h1>
          <p className="text-[16px] font-[poppins] font-[400]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In commodi
            a rem excepturi quas reprehenderit quidem! Aperiam, praesentium. Hic
            animi eius laborum sequi{" "}
          </p>
          <button
            className="w-[114px] mt-4 h-[36px] rounded-md text-[#F3F3F3] bg-[#000000]
"
          >
            Book A Table
          </button>
        </div>
        <div className="md:relative">
          <div className=" hidden md:block  -z-30 -bottom-20 -left-10 absolute bg-[#1A1A1A] w-[320px] h-[300px] border rounded-full"></div>
          <div className=" ">
            <img
              src="/7a583e33c3da1a3b2342c8b1504ed3cb.png"
              alt=""
              className="w-[330px] h-[320px] rounded-sm"
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Section;
