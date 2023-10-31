import React from "react";
import Link from "next/link";
import { default_text } from "../components/Data";
const Nav = () => {
  const Navigations = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Creative Studio",
      link: "/",
    },
    {
      title: "Portfolio",
      link: "/portfolio/Art & Design",
    },
    {
      title: "Contact Us",
      link: "/contactUs",
    },
    {
      title: "About Us",
      link: "/aboutUs",
    },
  ];
  return (
    <nav className="fixed  w-[80%]   py-[4vw] md:py-[0px] md:h-[5em] top-0 z-[100] font-regular  shadow-xl flex-wrap  right-[50%]  translate-x-[50%] bg-gradient-to-r from-[#353535]   rounded-b-[1em] md:rounded-b-[2em] to-[#383737] text-1xl text-text_color flex items-center  justify-evenly md:w-full max-w-[700px] ">
      {Navigations.map((each_nav, index) => {
        return (
          <Link key={index} href={each_nav.link}>
            <p className="text-xs  md:text-[1em] md:hover:text-[1.6em] md:hover:font-extrabold md:hover:text-[#FF9E0C] duration-200">
              {each_nav.title}
            </p>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
