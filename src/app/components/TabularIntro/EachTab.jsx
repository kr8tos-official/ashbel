import React from "react";
import Image from "next/image";
import { default_text_left } from "../Data";

const EachTab = (props) => {
  return (
    <div className="w-full h-full  ">
      <div className="relative h-[60%] md:h-[70%]">
        <Image
          className="object-cover"
          fill
          src={`${props.info_object.image_src}`}
        ></Image>
      </div>

      <div
        className="  h-[40%] h-auto md:h-[30%] p-10 md:p-5 "
        style={{
          backgroundColor: `${props.info_object.background_color}`,
          color: `${props.info_object.text_color}`,
        }}
      >
        <h1 className="font-extrabold  w- mx-auto md:mx-[0px] leading-[1em] text-[1.5em]  md:text-[2vw] lg:text-[1.5vw] 2xl:text-[20px] md:text-left">
          {props.info_object.heading}
        </h1>

        <p className="  w- mx-auto md:mx-[0px] leading-[2em] md:leading-[1em] text-[0.7em]  md:text-[1vw] lg:text-[0.8em]   2xl:text-[13px] md:text-left">
          {props.info_object.text}
        </p>
      </div>
    </div>
  );
};

export default EachTab;
