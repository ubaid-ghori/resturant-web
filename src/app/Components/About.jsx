import React from "react";

const About = () => {
  return (
    <div className="px-4 md:px-24 mt-24 ">
        <div className=" hidden md:block absolute left-[-200px]  opacity-40">
            <img src="/76b0d60381dad56efbdfddc48c59c034.png" alt=""
            width={350}
            // height={220}
             />
        </div>
      <div className=" block  md:flex gap-16 items-center">
        <div className=" w-full md:w-[40%] border-l-[25px] border-[#B4B4B4] rounded-full">
          <img
            src="/5164e608028799ff7ff8209f19592cb5.png"
            alt=""
            width={363}
            height={254}
            className=""
          />
        </div>

        <div className="w-full mt-8 md:mt-0    md:w-[50%]">
          <h1 className="font-[Righteous] text-center md:text-left text-[40px] font-[600]">
            About Us
          </h1>
          <p className=" text-[#252525] text-[16px] font-[400]  ">
            A restaurant is a business that prepares and serves food and drinks
            to customers. Meals are generally served and eaten on the premises,
            but many restaurants also offer take-out and food delivery services.
            We had dinner in the hotels restaurant. The restaurant serves
            breakfast, lunch, and dinner. The food at the restaurant was good
            and the waiters were polite. The seafood restaurant specializes in
            serving fish and shellfish.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            ipsum dignissimos error velit quas non delectus modi dolor
            consectetur in architecto nesciunt laudantium quidem deleniti,
            accusamus mollitia corporis ea adipisci!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
