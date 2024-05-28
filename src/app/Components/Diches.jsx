"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Star, Clock } from "lucide-react";
import Image from "next/image";
const Diches = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // Tailwind's sm breakpoint (640px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        //   arrows: false,
        },
      },
    ],
  };

  return (
    <div className=" px-10 md:px-20 pt-20">
        <div className=" hidden md:block absolute top-[98%] opacity-40 left-[85%] ">
        <Image
          src="/307cb4d4a609588fbd84352e4a8966e6.png"
          width={250}
          height={300}
        ></Image>
      </div>
      <h1 className="font-[Righteous] font-[600] text-[35px]">
        Popular Dishes
      </h1>

      <Slider {...settings}>
        {Data.map((d, id) => (
          <div key={id} className="w-[249px] h-[283px] rounded-sm p-6">
            <div className="flex justify-center items-center">
              <img
                src={d.img}
                alt={d.name}
                className="w-[249px] h-[236px] rounded-md "
              />
            </div>
            <div className="hidden sm:block bg-white font-[Righteous] font-[600] text-[20px] text-center">
              <h2 className="">{d.name}</h2>
            </div>
            <div className="hidden sm:flex bg-white items-center gap-2 px-3 pt-2">
              <p className="">{d.Clock}</p>
              <p className=" text-[12px] ">{d.time}</p>
            </div>
            <div className="hidden sm:flex bg-white items-center justify-between gap-2 px-3 pt-2">
              <div className="flex ">
                <p>{d.Star}</p>
                <p>{d.Star}</p>
                <p>{d.Star}</p>
                <p>{d.Star}</p>
                <p>{d.Star}</p>
              </div>
              <button className=" text-[17px] text-[#FFAF50]">{d.btn}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Diches;

const Data = [
  {
    img: "/f2e68230a1648b7b8f87ef2dd43894e2.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  {
    img: "/a8a1c46aca6c32dc81da84f2cdc1c648.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  {
    img: "/fa376bea36f2a7a9fdf92d007912f7b5.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  {
    img: "/f6c0fd0226a11ac987d46269ad7caef6.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  {
    img: "/7aeaa1ff1e6636e54beac1dbd4c688e5.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  {
    img: "/60d5b650f4b5659fb2b874ce8171372b.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  {
    img: "/f6c0fd0226a11ac987d46269ad7caef6.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  {
    img: "/f2e68230a1648b7b8f87ef2dd43894e2.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  {
    img: "/fa376bea36f2a7a9fdf92d007912f7b5.png",
    name: "French Toast",
    Clock: <Clock size={15} />,
    time: "30 March",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "order now",
  },
  // ... other data entries ...
];
