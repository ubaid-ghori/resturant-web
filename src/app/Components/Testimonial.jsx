"use client";
import React from "react";
import { Star } from "lucide-react";

const Testimonials = [
  {
    img: "/e9041586e97dbfbf30cc4d77ce1d5e5a (1).png",
    userimg: "/467aead6fcf17ade04d5569d1989413b.png",
    Star: <Star className="text-yellow-400" size={17} />,
    text: "Following is considered as the best way one can compliment a restaurant: “Excellent environment, friendly service, great menu choices and really decent food and at affordable prices. ",
  },
  {
    img: "/2d534614ce1d1dac288e86fbe80a8395.png",
    userimg: "/cd564aae436355a2d2d6d1e17902b2dd.png",
    Star: <Star className="text-yellow-400" size={17} />,
    text: "Following is considered as the best way one can compliment a restaurant: “Excellent environment, friendly service, great menu choices and really decent food and at affordable prices. ",
  },
];

const Testimonial = () => {
  
  return (
    <div className=" md:relative bg-[#C4C4C4] px-6 md:px-44  h-full md:h-[85vh] mt-32">
      <div className=" hidden md:block absolute w-[471px] -top-60 left-[40%] opacity-20 h-[350px] rotate-[13.69deg]">
        <img src="/b83c5fdcb9ade5f4879f795cee515a23.png" alt="" />
      </div>
      <h1 className="font-[Righteous] text-[40px] font-[600] pt-14 text-center mb-8">
        What Customers Say
      </h1>
    
      <div className=" block md:flex gap-20 ">
        {Testimonials.map((item, index) => (
          <div key={index} className=" relative md:w-[453px] md:h-[394] mb-40">
            <div>
              <img src={item.img} alt="" className=" w-[350px] md:w-[453px] md:h-[321px]" />
            </div>

            <div className=" top-56 flex flex-col gap-3 items-center absolute w-[350px] md:w-[369px] h-[143px] rounded-md bg-white md:left-12">
              <div className="flex gap-3 pt-6 ">{Array(5).fill(item.Star)}</div>
              <p className="md:text-[13px] text-[10px] font-[400] text-center">{item.text}</p>
            </div>

            <div className=" absolute top-40 left-32 md:left-48">
              <img
                src={item.userimg}
                alt=""
                className="h-[82px] w-[82px] border-2 border-white rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Testimonial;
