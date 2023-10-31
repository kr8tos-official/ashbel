import React from "react";
import { useStateContext } from "../StateContext/Context";

const Bg = () => {
  const { mouseY, set_show_modal } = useStateContext();
  return (
    <div
      onClick={() => {
        set_show_modal(false);
      }}
      className={`  w-full  h-auto  bg-[rgba(0,0,0,0.5)] z-[99] fixed  `}
    ></div>
  );
};

export default Bg;
