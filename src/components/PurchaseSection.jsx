import React from "react";
import { GoArrowRight } from "react-icons/go";

const PurchaseSection = () => {
  return (
    <div className="flex justify-between px-[3%] max-md:flex-col max-md:items-center max-md:space-y-4 mb-[6rem] ">
      <div className="space-y-8 w-[60%] max-md:w-full flex flex-col max-[480px]:text-center">
        <p className="font-sora text-twhite font-medium capitalize text-4xl max-lg:text-3xl max-md:text-2xl  leading-relaxed ">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </p>
        <p className="text-tgray text-lg">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <button className="capitalize btn-gradient rounded-[20px] font-sora text-2xl py-5 px-9 font-light flex items-center space-x-4 self-start max-md:self-center">
          <p>purchase from envato</p>
          <GoArrowRight />
        </button>
      </div>
      <img src="motionarteffect-img5.png" className=' object-contain max-h-[248px] max-w-[246px] ' alt="" />
    </div>
  );
};

export default PurchaseSection;
