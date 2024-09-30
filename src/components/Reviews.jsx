import React from "react";
import Review from "./Review";

const Reviews = () => {
  const imgUrl = [
    "motionarteffect-img2",
    "motionarteffect-img1",
    "motionarteffect-img3",
  ];
  return (
    <div className="text-twhite  text-center space-y-[2.5rem] mt-[3rem] mb-[4rem] ">
      <p className="text-2xl" >Trusted by thousands of users around the world</p>
      <div className="flex flex-wrap justify-evenly  space-x-4" >
        {imgUrl.map((img, index) => (
          <Review key={index} url={img} score={4.5} reviews={9} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
