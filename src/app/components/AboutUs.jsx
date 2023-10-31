import React from "react";
import {
  default_text_left,
  team,
  flex_component_div,
  main_header_font,
  default_text,
  header_3,
  header_4,
} from "../components/Data";
import ImageComponent from "../components/ImageComponent";
import Lines from "./Lines";

const AboutUs = () => {
  return (
    <>
      <br />
      <br />
      <div className={flex_component_div}>
        {/* this is the about Us  */}
        <div className="w-[80%] flex items-center flex-col md:w-1/2  ">
          <div className="relative   max-h-[200px]  max-w-[500px]   w-auto h-auto">
            <h1 className=" leading-[0.7em]   flex items-baseline  text-[25vw] max-h-[270px]  md:text-[20vw] 2xl:text-[250px]">
              A
              <p className="font-light text-[8vw]  md:text-[5vw] 2xl:text-[65px] md:hover:tracking-[.3em] duration-700">
                bout
              </p>
            </h1>
            <div className="w-[60%] absolute  h-[4vw] bg-white line_grad  md:w-[110%] md:h-[3vw] max-h-[30px] mt-[-20%] "></div>
          </div>

          <div className="relative ml-[10vw]  max-h-[200px]  max-w-[500px]   w-auto h-auto">
            <h1 className=" leading-[0.7em]   flex items-baseline  text-[25vw] max-h-[270px]  md:text-[20vw] 2xl:text-[250px]">
              A
              <p className="font-light text-[8vw]  md:text-[5vw] 2xl:text-[65px] md:hover:tracking-[.3em] duration-700">
                shbel
              </p>
            </h1>
            <div className="w-[60%] absolute  h-[4vw] bg-white line_grad  md:w-[110%] md:h-[3vw] max-h-[30px] mt-[-20%] "></div>
          </div>
          <br />
          <p className=" md:border-l-white md:border-l-[1em] md:px-6  text-[1em] 2xl:text-[15px] md:ml-[5vw] w-[100%]    text-center font-Montserrat  font-light md:hover:leading-[-1vw] hover:tracking-[.01em] duration-700 text-center     md:text-[1.1vw] md:w-4/5 md:tracking-[.02em]  text-left  md:leading-[1.5vw] 2xl:leading-[30px] md:text-left ">
            We develop highly optimized and maintainable solutions that match
            our clients' business goals, utilizing the recent technologies,
            processes, tools, and best of Engineers, Programmers and Developers
            to the fullest extent possible.We develop highly optimized and
            maintainable solutions that match our clients' business goals,
            utilizing the recent technologies, processes,
          </p>
        </div>
        {/*  */}
        <div className="hidden md:w-1/2 md:flex p-10 ">
          <ImageComponent image_url="/AboutUs.png" max_height="750" />
        </div>
      </div>

      {/* OUR TEAM SECTION   */}
      <p className={main_header_font}>
        Our <br />
        Team
      </p>

      <p className={default_text}>
        Discover our team—dynamic, diverse, and driven by excellence. Meet the
        faces behind our success and embrace the energy that fuels us. Welcome
        to our world!
      </p>
      {team.map((each_member, index) => {
        return (
          <div className={flex_component_div} key={index}>
            <div className=" w-full md:w-1/2 flex   ">
              <ImageComponent
                image_url={each_member.teamate_pic}
                max_height="600"
              ></ImageComponent>
            </div>
            <div className="w-[80%]   md:w-1/2">
              <p className={header_3}>
                {each_member.teamate_firstname.toUpperCase()}
              </p>
              <p className={header_4}>
                {each_member.teamate_lastname.toUpperCase()}
              </p>
              <br />
              <p
                className={` ${default_text_left}  md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[25px] leading-[1em] border-l-white border-l-[5px] px-2`}
              >
                {each_member.role.toUpperCase()}
              </p>
              <p className={` ${default_text_left} font-thin italic`}>
                {each_member.expertise}
              </p>
              <p className={`${default_text_left} lg:w-[80%]`}>
                {each_member.short_dec}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AboutUs;
