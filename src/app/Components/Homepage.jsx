import React from "react";
import "./home.css";
import Image from "next/image";
const Homepage = () => {
  return (
    <div className="md:px-20 px-4 pt-10">
      <div className=" hidden md:block absolute top-[23%] opacity-40 left-[30%] ">
        <Image
          src="/307cb4d4a609588fbd84352e4a8966e6.png"
          width={250}
          height={230}
        ></Image>
      </div>

      <div className="md:flex block justify-between items-center mt-20">
        <div className=" w-full md:w-[50%]">
        <div className="flex ">
        <h6 className=" text-[20px] md:text-[32px] font-[Righteous] ">
              Italian 
            </h6>
          <h1 className="font-[Righteous] text-[100px] md:text-[125px] font-[400]">
            Cusine
          </h1>
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            itaque repudiandae necessitatibus at sint repellendus corporis nihil
            sapiente cum iure enim eos, natus consectetur delectus reiciendis
            harum pariatur ab perspiciatis!
          </p>
          <div className=" flex gap-3 mt-5">
            <button className="bg-[#FF9B26] text-white p-2 border rounded-md w-32 " >Our Menu</button>
            <button className="bg-black text-white p-2 border rounded-md w-32 " >Our Drink</button>
          </div>
        </div>

        <div className=" mt-10 md:mt-0">
          <Image
            src="/5164e608028799ff7ff8209f19592cb5.png"
            width={391}
            height={405}
          ></Image>
        </div>

        <div className=" hidden md:block absolute top-[80%] opacity-40 left-[25%] ">
        <Image
          src="/307cb4d4a609588fbd84352e4a8966e6.png"
          width={250}
          height={300}
        ></Image>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
