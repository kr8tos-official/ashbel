import React from "react";
import Image from "next/image";
import EachTab from "./TabularIntro/EachTab";
import { default_text_left, header_3 } from "./Data";

const TablularIntro = () => {
  const tabluar1 = {
    heading: "LIGHT PHOTOGRAPHY",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
    background_color: "#FF9E0C",
    image_src: "/sample_images/LightPainting.jpg",
    text_color: "",
  };

  const tabluar2 = {
    heading: "WEDDING PHOTOGRAPHY",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
    background_color: "#FFFFFF",
    image_src: "/sample_images/Wedding Photography.jpg",
    text_color: "black",
  };
  return (
    <div className="min-h-[100vh] w-full grid  grid-rows-4 grid-cols-1    md:grid-rows-4 md:grid-cols-3 justify-center">
      <div className="relative row-span-1 col-span-1   md:row-span-4  md:col-span-1">
        <Image
          fill
          src={"/sample_images/WomanWithLight.png"}
          className="object-cover"
        ></Image>
      </div>
      <div className=" row-span-1 col-span-1   md:row-span-2 md:col-span-1">
        <EachTab info_object={tabluar1} />
      </div>

      <div className="  row-span-1 col-span-1  md:row-span-2 md:col-span-1">
        {" "}
        <EachTab info_object={tabluar2} />
      </div>
      <div className="bg-[#262626]  row-span-1 col-span-1  md:row-span-4 md:col-span-2 relative  flex  flex-col  md:flex-row items-center py-10  md:p-24">
        <img src={"/boxes.svg"} className="w-[15%] md:self-start "></img>
        <div className="self-start">
          <h2 className={header_3}>CREATIVE</h2>
          <h2 className={header_3}>PHOTOGRAPHY</h2>
          <p className={`${default_text_left}  2xl:w-[70%]`}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is availablIn publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is availabl
          </p>
        </div>
      </div>
    </div>
  );
};

export default TablularIntro;
