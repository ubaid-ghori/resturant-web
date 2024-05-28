import React from "react";
import './form.css';

const Form = () => {
  return (
    <div className=" px-4 md:px-40 mt-20 flex flex-col justify-center   " id="form">
      <h1 className=" pt-8 font-[600] text-[40px] font-[Righteous] text-white text-center">Join Us To an amazing discount <br /> on your next order</h1>
      <div className="rounded-sm flex justify-center pt-4">
        <input 
          type="email" 
          className="w-[500px] text-black p-3 rounded-md" 
          placeholder="Your Email Here" 
          aria-label="Email" 
        />
        <button className="w-[210px] p-2 bg-[#1A1A1A] text-white rounded-md">Submit</button>
      </div>
    
    </div>
  );
};

export default Form;
