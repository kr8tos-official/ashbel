import React from "react";
import Image from "next/image";
const ImageComponent = (props) => {
  return (
    <div
      style={{ maxHeight: `${props.max_height}px` }}
      className=" p-[3em]  relative h-[100vw]  md:h-[50vw] relative w-[65%] md:w-[90%] mx-auto z-10  lg:ml-[5vw] 2xl:ml-[4em]  md:hover:w-[95%]   duration-700"
    >
      <Image
        fill
        unoptimized
        className="object-contain  font-Montserrat       "
        src={props.image_url}
        alt={"KR8TOS"}
      />
    </div>
  );
};

export default ImageComponent;
