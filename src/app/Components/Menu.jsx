"use client";
import React, { useState } from "react";
import { Star, Clock } from "lucide-react";

// Define Menuitem array outside the component
const Menuitem = [
  {
    id: 1,
    name: "pasta",
    price: 12.99,
    image: "/924cfb11d8e7556f45ce8173826fb71a.png",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "Order Now",
    Clock: <Clock size={15} />,
    time: "30 March",
  },
  {
    id: 2,
    name: "Salad",
    price: 12.99,
    image: "/0919029cc2f1a8e73d00c4469ad8b05d.png",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "Order Now",
    Clock: <Clock size={15} />,
    time: "30 March",
  },
  {
    id: 3,
    name: "Salad",
    price: 12.99,
    image: "/a8a1c46aca6c32dc81da84f2cdc1c648.png",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "Order Now",
    Clock: <Clock size={15} />,
    time: "30 March",
  },
  {
    id: 4,
    name: "pasta",
    price: 12.99,
    image: "/f2e68230a1648b7b8f87ef2dd43894e2.png",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "Order Now",
    Clock: <Clock size={15} />,
    time: "30 March",
  },
  {
    id: 5,
    name: "drink",
    price: 12.99,
    image: "/images.jpeg",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "Order Now",
    Clock: <Clock size={15} />,
    time: "30 March",
  },
  {
    id: 6,
    name: "drink",
    price: 12.99,
    image: "/download.jpeg",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "Order Now",
    Clock: <Clock size={15} />,
    time: "30 March",
  },
  {
    id: 7,
    name: "pasta",
    price: 12.99,
    image: "/fa8b8f75f3f21bb17bc20d599f0ab039.png",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "Order Now",
    Clock: <Clock size={15} />,
    time: "30 March",
  },
  {
    id: 8,
    name: "Salad",
    price: 12.99,
    image: "/2d534614ce1d1dac288e86fbe80a8395.png",
    Star: <Star className="text-yellow-400" size={15} />,
    btn: "Order Now",
    Clock: <Clock size={15} />,
    time: "30 March",
  },
];

const Menu = () => {
  const [item, setItem] = useState(Menuitem);

  const filterItem = (CateItem) => {
    const updateItems = Menuitem.filter((curElem) => {
      return curElem.name === CateItem;
    });
    setItem(updateItems);
  };

  return (
    <div className=" px-4 md:px-24 mt-20 items-center">
        
      <div className="flex gap-3">
        <h2 className="font-[600] font-[poppins] text-[40px]">Menu</h2>
        <button
          className="font-[Righteous] font-[400] text-[20px]"
          onClick={() => setItem(Menuitem)}
        >
          Dishes
        </button>
        <button
          className="font-[Righteous] font-[400] text-[20px]"
          onClick={() => filterItem("Salad")}
        >
          Salad
        </button>
        <button
          className="font-[Righteous] font-[400] text-[20px]"
          onClick={() => filterItem("pasta")}
        >
          Pasta
        </button>
        <button
          className="font-[Righteous] font-[400] text-[20px]"
          onClick={() => filterItem("drink")}
        >
          Drinks
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {item.map((d, id) => (
          <div key={id} className="rounded-sm p-2">
            <div className="flex justify-center items-center">
              <img
                src={d.image}
                alt={d.name}
                className="w-[249px] h-[236px] rounded-md"
              />
            </div>
            <div className="flex justify-between px-2 items-center pt-2 bg-white font-[Righteous] font-[600] text-[20px]">
              <h2>{d.name}</h2>
              <div className="flex">{Array(5).fill(d.Star)}</div>
            </div>
            <div className="flex bg-white items-center gap-2 px-3 pt-2">
              <p>{d.Clock}</p>
              <p className="text-[12px]">{d.time}</p>
            </div>
            <div className="flex bg-white items-center justify-between gap-2 px-3 pt-2">
              <div className="flex">
                <p>{d.price}</p>
              </div>
              <button className="text-[17px] text-[#FFAF50]">{d.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
