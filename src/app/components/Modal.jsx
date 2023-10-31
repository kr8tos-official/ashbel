"use client";
import React from "react";
import Bg from "./Bg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useStateContext } from "../StateContext/Context";

const Modal = (props) => {
  const { mouseY, set_show_modal } = useStateContext();
  const isImgLink = () => {
    if (typeof props.url !== "string") return false;
    return (
      props.url.match(/.+\.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/i) !== null
    );
  };

  return (
    <>
      <div
        onClick={() => {
          set_show_modal(false);
        }}
        className={`  w-full  h-full bg-[rgba(0,0,0,0.5)] z-[99] fixed  `}
      >
        <div
          style={{ marginTop: `${100}px` }}
          className={`relative w-[80%] h-[90vw] md:h-[40vw] max-h-[800px]  flex items-center justify-around mx-auto lg:w-[50%]  max-w-[800px] `}
          onClick={() => {
            set_show_modal(false);
          }}
        >
          {console.log(isImgLink(props.url), props.url)}
          {isImgLink(props.url) ? (
            <Image
              src={props.url}
              fill
              className="object-contain"
              alt="image could not be found"
            />
          ) : (
            <video className="w-full" controls src={props.url} />
          )}
        </div>
      </div>
      <Bg></Bg>
    </>
  );
};

export default Modal;
