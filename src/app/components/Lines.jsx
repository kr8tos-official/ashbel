import React from "react";

const Lines = () => {
  return (
    <>
      {/* top part */}
      <div className="animate-[extrapolateWidth_2s_ease] border-dashed  animate-pulse top_transform_origin absolute  top-[10vw] lg:top-[5vw]   text-[white] border-t-[0.3px] border-gray-600  w-full "></div>
      <div className="animate-[extrapolateWidth_3s_ease]  absolute top-[14vw] md:top-[10.3vw]  lg:top-[5.3vw]  text-[white] border-t-[0.3px] border-gray-600  w-full "></div>

      {/* left side */}
      <div className="animate-[extrapolateHeight_3s_ease] border-dashed absolute left-[3vw] top_transform_origin  text-[white] border-l-[0.3px] border-gray-600  h-full "></div>

      {/* right side */}
      <div className="animate-[extrapolateHeight_4s_ease] border-dashed delay-200 absolute right-[3vw] top_transform_origin  text-[white] border-l-[0.3px] border-gray-600  h-full "></div>

      {/* bottom line */}
      <div className="animate-[extrapolateWidth_3s_ease]  absolute bottom-[20px] md:bottom-[10vw]   lg:bottom-[2vw]  text-[white] border-t-[0.3px] border-gray-600  w-full "></div>
    </>
  );
};

export default Lines;
