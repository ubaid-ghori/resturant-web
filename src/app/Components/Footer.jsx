import React from "react";

const Footer = () => {
  return (
    <div className=" px-4 md:px-20 mt-10 bg-[#0F0F0F]">
      <div className="  block md:flex justify-between pb-5 ">
        <div className=" w-full md:w-[40%]">
          <img src="/logo.png" alt="" className="w-[144px] h-[81]" />
          <p className="font-[poppins] font-[400] text-[14px] text-white">
            A restaurant is a business that prepares and serves food and drinks
            to customers. Meals are generally served and eaten on the premises,
            but many restaurants also offer take-out and food delivery services.
          </p>
        </div>
       
       <div className="w-full md:w-[50%] block md:flex gap-20 mt-16 md:mx-30">
       <div className=" md:mb-0 mb-7">
       <h2 className="font-[600] text-white text-[20px] mb-3 font-[poppins] ">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3 text-white">
            <li className="font-[Roboto] text-[15px] font-[600]">Home</li>
            <li className="font-[Roboto] text-[15px] font-[600]">About</li>
            <li className="font-[Roboto] text-[15px] font-[600]">Menu</li>
            <li className="font-[Roboto] text-[15px] font-[600]">Food</li>
            <li className="font-[Roboto] text-[15px] font-[600]">Contact</li>
          </ul>
        </div>
        <div  className=" md:mb-0 mb-7">
          <h2 className="font-[600] text-white text-[20px] mb-3 font-[poppins] ">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3 text-white">
            <li className="font-[Roboto] text-[15px] font-[600]">Faqs</li>
            <li className="font-[Roboto] text-[15px] font-[600]">About</li>
            <li className="font-[Roboto] text-[15px] font-[600]">Privacy Policy</li>
            <li className="font-[Roboto] text-[15px] font-[600]">Terms and Conditions</li>
            <li className="font-[Roboto] text-[15px] font-[600]">Support</li>
          </ul>
        </div>
        <div  className=" md:mb-0 mb-7">
          <h2 className="font-[600] text-white text-[20px] mb-3 font-[poppins] ">
            Contact Us
          </h2>
          <ul className="flex flex-col gap-3 text-white">
            <li className="font-[Roboto] text-[15px] font-[600]"> karachi pakistan</li>
            <li className="font-[Roboto] text-[15px] font-[600]">+846578498</li>
            <li className="font-[Roboto] text-[15px] font-[600]">lorem@gmail.com</li>
          </ul>
        </div>
       </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Footer;
