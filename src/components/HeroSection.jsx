import React from "react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-4 text-twhite px-9 py-4  max-md:grid-cols-1 max-md:place-items-center max-md:space-y-8 mt-[3rem] ">
      <div className="col-span-1  w-1/2 max-[968px]:w-[70%]     text-xl space-y-4   max-md:w-[25%] max-[514px]:w-[40%] max-[358px]:w-1/2">
        
        <div className="text-gradient">
          Transform
          Your Website
        </div>
        <div className="">
          With Motion 
          Art Effect
        </div>

      </div>
      
      <div className="col-span-3  space-y-5 w-[75%] max-[825px]:w-[80%] max-md:text-center max-md:w-[90%] ">

        <div className="text-6xl leading-normal font-medium  text-twhite font-sora space-y-5 pt-2 max-[1024px]:text-5xl max-[1024px]:leading-[4rem] max-md:text-4xl">
          Attract Your Visitors Attention With Colorful <p className="text-gradient" >Motion Art Effect</p>
        </div>
        
        <div className='text-tgray text-xl' >
           Unleash the power of creativity with Motion Art for Elementor - your ultimate solution 
            for seamlessly integrating captivating animations
            into your website.
          
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default HeroSection;
