import React from "react";

const Review = ({ url, score, reviews }) => {
  return (
    <div className="flex items-center  my-[1rem] space-x-4 ">
      <img src={`${url}.png`} alt="" className="object-contain" />

      <div className="space-y-4 text-lg ">

        <img src="motionarteffect-img4.png" alt="" />

        <p className="text-[#b4aec4] font-semibold ">
          <span className="font-bold">{score}</span> Score, {reviews}{" "}
          Reviews
        </p>
      </div>
    </div>
  );
};

export default Review;
