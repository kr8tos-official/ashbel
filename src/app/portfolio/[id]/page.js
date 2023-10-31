"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import OneLayout from "@/app/Layout/OneLayout";
import { useState, useEffect } from "react";
import { useStateContext } from "@/app/StateContext/Context";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  main_header_font,
  component_div,
  default_text,
  var_btns,
  header_text,
} from "../../components/Data";
import { sample_portfolio } from "../../components/Data";
import Modal from "@/app/components/Modal";

const page = () => {
  const [portfolio_data, set_portfolio_data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, set_seclected] = useState("Art & Design");
  const [description, set_description] =
    useState(`  In publishing and graphic design, Lorem ipsum is a placeholder text
  commonly used to demonstrate the visual form of a document or a typeface
  without relying on meaningful content. Lorem ipsum may be used as a
  placeholder before final copy is availabl`);
  const { modal, user_url, set_url, set_show_modal } = useStateContext();

  useEffect(() => {
    set_portfolio_data(sample_portfolio);
    set_seclected("Art & Design");
  }, []);

  function update_data() {
    if (portfolio_data.length <= 50) {
      set_portfolio_data((prevData) => [...prevData, ...sample_portfolio]);
    } else {
      setIsLoading(false);
      return;
    }
  }

  // const handleScroll = () => {

  //   let threshold = document.documentElement.offsetHeight;
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !== threshold ||
  //     isLoading
  //   ) {
  //     return;
  //   }

  //   update_data();
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isLoading]);

  return (
    <div>
      {modal && <Modal url={user_url}></Modal>}
      <OneLayout>
        <div className="min-h-[100vh] mt-[10vw] 2xl:mt-[100px] lg:mt-[5vw]">
          <p className={main_header_font}>
            {" "}
            Our <br /> Portfolio
          </p>

          <p className={header_text}>{description}</p>

          <div className="font-Montserrat pt-[2vw]  mx-auto text-white flex items-center gap-[3vw] flex-wrap justify-evenly w-full md:w-[80%] lg:w-[60%] 2xl:gap-[20px]">
            {var_btns.map((each_btn, index) => {
              return (
                <Link href={`/portfolio/${each_btn.slug}`} key={index}>
                  <button
                    onClick={() => {
                      set_seclected(each_btn.slug);
                      set_description(each_btn.desc);

                      // set_desc(each_btn.desc), display(each_btn.slug);
                    }}
                    className={` ${
                      each_btn.slug === selected
                        ? "font-bold text-[3vw]   lg:text-[1.2vw]  md:text-[1.3vw] 2xl:text-[30px] "
                        : "bg-k_blue font-thin text-[2vw]   lg:text-[0.8vw]  md:text-[1.1vw] "
                    }   mx-auto   duration-300 md:hover:text-[1.1vw]  text-center  md:max-w-[12vw]  lg:max-w-[12vw]    lg:h-auto  text-center font-Monserrat 2xl:text-[15px]   `}
                  >
                    {each_btn.title}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* INFINITE SCROLL DATA */}
          <InfiniteScroll
            dataLength={portfolio_data.length}
            next={update_data}
            hasMore={isLoading}
            loader={<p className="text-center animate-pulse ">LOADING MORE</p>}
          >
            <div className=" flex mx-auto flex-wrap items-center gap-[20px] justify-center mt-[3vw] 2xl:mt-[70px] duration-700">
              {portfolio_data.map((each, index) => {
                return (
                  <div
                    onClick={() => {
                      set_url(each), set_show_modal(true);
                    }}
                    key={index}
                    className="hover:scale-110 duration-300 relative w-[40vw] h-[50vw] md:w-[25vw] md:h-[30vw]  max-w-[300px] max-h-[350px]"
                  >
                    <Image fill src={each} className="object-cover"></Image>
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
          {/* <div className=" flex mx-auto flex-wrap items-center gap-[20px] justify-center mt-[3vw] 2xl:mt-[70px] duration-700">
            {portfolio_data.map((each, index) => {
              return (
                <div
                  onClick={() => {
                    set_url(each), set_show_modal(true);
                  }}
                  key={index}
                  className="hover:scale-110 duration-300 relative w-[40vw] h-[50vw] md:w-[25vw] md:h-[30vw]  max-w-[300px] max-h-[350px]"
                >
                  <Image fill src={each} className="object-cover"></Image>
                </div>
              );
            })}
          </div> */}
        </div>
      </OneLayout>
    </div>
  );
};

export default page;
