"use client";
import React from "react";
import OneLayout from "../Layout/OneLayout";
import Link from "next/link";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#171717] text-[white] w-full font-Montserrat text-white flex flex-col items-center mt-[5vw]  py-[4vw] 2xl:py-[50px]">
      <h1 className=" text-white text-[7vw] md:text-[3.5vw] xl:text-[3vw]  leading-[85%]   font-regular 2xl:text-[30px]">
        {" "}
        FOLLOW US ON OUR{" "}
      </h1>
      <h1 className=" text-white text-[6vw] md:text-[3.5vw] xl:text-[3vw]  leading-[85%]   font-regular 2xl:text-[30px]">
        {" "}
        SOCIALS
      </h1>

      <p className="text-center text-[3vw] leading-[5vw] md:leading-[2.5vw] md:w-[80%]   md:text-[1vw]   w-[100%]  md:text-center leading-[4vw] 2xl:text-[15px] 2xl:leading-[1em]  mt-[2em] ">
        Interact with us and follow us on all Social Media Platforms
      </p>
      <br />
      <div className=" w-full flex-wrap flex flex-col  md:flex-row items-center justify-around wrap gap-[2vw] 2xl:w-[80%] ">
        <Link
          href={"mailto:info@atlanticcrest.org"}
          className="w-[50%] md:w-auto"
        >
          <span className="flex items-center flex-col md:flex-row  border-b-[0.5px] md:border-b-[0px]   md:border-l-[3px] gap-[10px] px-[1vw] py-[2vw] md:py-[0px] ">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="1x"
              className="border rounded-full p-[0.5em]"
            />
            <p className="text-[3vw] md:text-[1vw] 2xl:text-[18px]  ">
              info@atlanticcrest.org{" "}
            </p>
          </span>
        </Link>

        <Link href="tel:+233556600427" className="w-[50%] md:w-auto">
          <span className="flex items-center flex-col md:flex-row   border-b-[0.5px] md:border-b-[0px]   md:border-l-[3px] gap-[10px] px-[1vw] py-[2vw] md:py-[0px]  ">
            <FontAwesomeIcon
              icon={faPhone}
              size="1x"
              className="border rounded-full p-[0.5em]"
            />
            <p className="text-[3vw] md:text-[1vw] 2xl:text-[18px]">
              +233556600427
            </p>
          </span>
        </Link>

        <Link
          href={
            "https://www.facebook.com/profile.php?id=100095624282225&mibextid=nW3QTL"
          }
          className="w-[50%] md:w-auto"
        >
          <span className="flex items-center flex-col md:flex-row   border-b-[0.5px] md:border-b-[0px]   md:border-l-[3px] gap-[10px] px-[1vw] py-[2vw] md:py-[0px]  ">
            <FontAwesomeIcon
              icon={faFacebook}
              size="1x"
              className="border rounded-full p-[0.5em]"
            />
            <p className="text-[3vw] md:text-[1vw] 2xl:text-[18px] ">
              Atlantic Crest Group{" "}
            </p>
          </span>
        </Link>

        <Link
          className="w-[50%] md:w-auto"
          href={
            "https://instagram.com/atlanticcrestgrroup?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          }
        >
          <span className="flex items-center flex-col md:flex-row   border-b-[0.5px] md:border-b-[0px]   md:border-l-[3px] gap-[10px] px-[1vw] py-[2vw] md:py-[0px] ">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="1x"
              className="border rounded-full p-[0.5em]"
            />
            <p className="text-[3vw] md:text-[1vw] 2xl:text-[18px]">
              @atlanticcrestgroup{" "}
            </p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
