import React from "react";
import Image from "next/image";
import OneLayout from "../Layout/OneLayout";
import { header_new, header_4 } from "./Data";
import { useStateContext } from "../StateContext/Context";

const SamplePortfolio = () => {
  const sample_portfolio = [
    "/sample_images/LightPainting.jpg",
    "/sample_images/Wedding Photography.jpg",
    "/sample_images/1649989616601.jpg",
    "/sample_images/A lady posed with ambient lighting.jpg",

    "/sample_images/LightPainting.jpg",
    "/sample_images/Wedding Photography.jpg",
    "/sample_images/1649989616601.jpg",
    "/sample_images/A lady posed with ambient lighting.jpg",
    "/sample_images/WomanWithLight.png",
    "/sample_images/Wedding Photography.jpg",
    "/sample_images/1649989616601.jpg",
    "/sample_images/A lady posed with ambient lighting.jpg",
  ];

  const { set_url, set_show_modal } = useStateContext();

  return (
    <div className="w-full py-[5vw] text-center text-[3vw] cursor-pointer tracking-[.2em]  ">
      <p
        className={`${header_new}  hover:tracking-[.3em] duration-500 hover:text-orange-400`}
      >
        Our
      </p>
      <p className={header_new}>Portfolio</p>
      <OneLayout>
        <div className=" flex mx-auto flex-wrap items-center gap-[20px] justify-center mt-[3vw] duration-700">
          {sample_portfolio.map((each, index) => {
            return (
              <div
                onClick={() => {
                  set_url(each), set_show_modal(true);
                }}
                key={index}
                className="hover:scale-110 duration-300 relative w-[40vw] h-[50vw] md:w-[20vw] md:h-[25vw] max-w-[300px] max-h-[350px]"
              >
                <Image fill src={each} className="object-cover"></Image>
              </div>
            );
          })}
        </div>
      </OneLayout>

      <p className="text-[0.3em] font-bold tracking-[0em] mt-10">
        Explore More
      </p>
    </div>
  );
};

export default SamplePortfolio;
