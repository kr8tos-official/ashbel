import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lines from "./Lines";
import { header_text } from "./Data";
const Header = () => {
  return (
    <div className="relative w-full ">
      <Lines />
      <div className="header_bg border  flex flex-col items-center justify-around  py-[15vw] md:py-[12vw] lg:py-[8vw] h-auto md:min-h-[100vh] ">
        <div className="flex flex-col justify-between items-center ">
          <img
            src="/Ashbel white-02.png"
            className="w-[40vw] md:w-[25vw]"
          ></img>
          <br />
          <p className={header_text}>
            We are an international multi-faceted Creative Studios ,Digital
            Marketing and a Software Development Company geared at delivering
            high-end Digital Services to bridge the gap between Creative
            Content, Software and Marketing for your ideas, Products, Businesses
            and Services .
          </p>
          <br />
          <Link href="/">
            <button className="text-[2vw] bg-text_color text-black_text  px-[3vw] py-[2vw] md:text-[1vw] md:px-[2em] md:py-[1em]   md:hover:px-[3.2em] md:hover:py-[1.2em] md:hover:text-1.5xl duration-500 md:hover:font-bold lg:text-[.8em] ">
              HIRE US {">>"}{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
