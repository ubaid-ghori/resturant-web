import React from "react";
import {
  UtensilsCrossed,
  ClipboardPenLine,
  CircleDollarSign,
} from "lucide-react";
const Order = () => {
  return (
    <div className=" px-4 md:px-24 mt-32">
      <h1 className="font-[Righteous] text-[40px] font-[600] ">How To Order</h1>
      <div className=" block md:flex gap-8 mt-6">
        <div className=" bg-white p-2 pt-8 rounded-md mb-4">
          <UtensilsCrossed size={40} className="mx-4 mb-4" />
          <h2 className=" font-[poppins] font-[600] text-[25px] ">
            Select Dish
          </h2>
          <p className="font-[Roboto] text-[12px] font-[400] mb-4">
            Delicious meals are tasty, appetizing, scrumptious, yummy, luscious,
            delectable, mouth-watering, fit for a king, delightful, lovely,
            wonderful, pleasant, enjoyable, appealing, enchanting, charming and
            highly pleasant to the taste. First paragraph: Tell your restaurants
            story in a few words, what makes your place special, and why people
            ....
          </p>
        </div>
        <div className=" bg-white p-2 pt-8 rounded-md mb-4">
          <ClipboardPenLine size={40} className="mx-4 mb-4" />
          <h2 className=" font-[poppins] font-[600] text-[25px] ">
            Select Dish
          </h2>
          <p className="font-[Roboto] text-[12px] font-[400] mb-4">
            Delicious meals are tasty, appetizing, scrumptious, yummy, luscious,
            delectable, mouth-watering, fit for a king, delightful, lovely,
            wonderful, pleasant, enjoyable, appealing, enchanting, charming and
            highly pleasant to the taste. First paragraph: Tell your restaurants
            story in a few words, what makes your place special, and why people
            ....
          </p>
        </div>
        <div className=" bg-white p-2 pt-8 rounded-md mb-4">
          <CircleDollarSign size={40} className="mx-4 mb-4" />
          <h2 className=" font-[poppins] font-[600] text-[25px] ">
            Select Dish
          </h2>
          <p className="font-[Roboto] text-[12px] font-[400] mb-4">
            Delicious meals are tasty, appetizing, scrumptious, yummy, luscious,
            delectable, mouth-watering, fit for a king, delightful, lovely,
            wonderful, pleasant, enjoyable, appealing, enchanting, charming and
            highly pleasant to the taste. First paragraph: Tell your restaurants
            story in a few words, what makes your place special, and why people
            ....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
