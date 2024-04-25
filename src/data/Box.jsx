import React from "react";
import boximage from "../assets/box2.png"

export const Box = () => {
  return (
    <div className="w-[94px] h-[94px]">
      <img src={boximage} className="w-full h-full object-contain" alt="" />
      {/* <div className=" w-[94px] h-[94px] top-0 left-0">
        <div className="relative w-[160px] h-[160px] top-[-32px] left-[-33px] bg-[url(/ellipse-152.png)] bg-[100%_100%]">
          <div className="absolute w-[64px] h-[64px] top-[47px] left-[48px] border border-solid border-[#363a34] shadow-[0px_3px_25px_3px_#1c6b0059]" />
          <div className="absolute w-[62px] h-[62px] top-[48px] left-[49px] rounded-[31px] border border-solid border-[#363a34]" />
          <img
            className="left-[23px] absolute w-[114px] h-[114px] top-[22px] object-cover"
            alt="Line"
            src="line-108.svg"
          />
          <img
            className="left-[22px] absolute w-[114px] h-[114px] top-[22px] object-cover"
            alt="Line"
            src="line-109.svg"
          />
          <img className="absolute w-[72px] h-[63px] top-[48px] left-[44px]" alt="Vector" src="vector.svg" />
        </div>
      </div> */}
    </div>
  );
};