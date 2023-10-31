"use client";
import Image from "next/image";
import React from "react";
import Lines from "./Lines";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { blur_bg, main_header_font } from "./Data";

import { useState, useEffect } from "react";

const VideoPortfolio = () => {
  const [video_id, set_video_id] = useState("PUnx13A4XDs");
  function extractYouTubeVideoId(url) {
    // Define a regular expression pattern to match YouTube URLs
    const youtubePattern =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|watch|.*[?&]v=))|youtu\.be\/)([^"&?/ ]{11})/;

    // Use the pattern to extract the video ID
    const match = url.match(youtubePattern);

    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?controls=0&showinfo=0`;
    } else {
      // Return null if the URL doesn't match the expected pattern
      return null;
    }
  }

  const video_link = [
    {
      thumbail: "/sample_images/LightPainting.jpg",
      youtube_link:
        "https://www.youtube.com/watch?v=FCUk7rIBBAE&list=RDewMKS8GcmhI&index=21",
    },

    {
      thumbail: "/sample_images/LightPainting.jpg",
      youtube_link:
        "https://www.youtube.com/watch?v=NPCC02SaJVg&list=RDewMKS8GcmhI&index=23",
    },

    {
      thumbail: "/sample_images/LightPainting.jpg",
      youtube_link:
        "https://www.youtube.com/watch?v=so4dgTRaWFk&list=RDewMKS8GcmhI&index=25&pp=8AUB",
    },

    {
      thumbail: "/sample_images/LightPainting.jpg",
      youtube_link:
        "https://www.youtube.com/watch?v=FCUk7rIBBAE&list=RDewMKS8GcmhI&index=21",
    },

    {
      thumbail: "/sample_images/LightPainting.jpg",
      youtube_link:
        "https://www.youtube.com/watch?v=FCUk7rIBBAE&list=RDewMKS8GcmhI&index=21",
    },

    {
      thumbail: "/sample_images/LightPainting.jpg",
      youtube_link:
        "https://www.youtube.com/watch?v=FCUk7rIBBAE&list=RDewMKS8GcmhI&index=21",
    },

    {
      thumbail: "/sample_images/LightPainting.jpg",
      youtube_link:
        "https://www.youtube.com/watch?v=FCUk7rIBBAE&list=RDewMKS8GcmhI&index=21",
    },
  ];
  return (
    <div
      className="bg-[#171717] w-full relative py-[10vw]   lg:py-[4vw] flex flex-col items-center  overflow-hidden"
      style={blur_bg}
    >
      <Lines />
      <div className="flex flex-col md:flex-row   items-center w-full lg:w-[80%]  mt-[5vw] mx-auto justify-between  ">
        <p className="text-[4em]  md:text-[3em] lg:text-[4vw]">VIDEO</p>

        <iframe
          className="w-[80vw]  h-[60vw]  md:w-[60vw] md:h-[40vw] md:hover:w-[83vw] md:hover:h-[63vw] max-h-[400px] max-w-[700px]   "
          src={`https://www.youtube.com/embed/${video_id}?modestbranding=1&controls=1&showinfo=0&rel=0&autohide=0`}
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <p className="text-[4em] md:text-[3em] lg:text-[4vw]">GRAPHY</p>
      </div>
      <br />
      <p className=" font-Montserrat font-extralight   w-4/5 text-[3vw] text-center hover:leading-[7vw]    md:hover:leading-[2.5vw] duration-300  font-thin leading-[2em] md:text-[1.5vw] lg:text-[15px] mx-auto lg:w-2/5 md:w-1/2 ">
        We are an international multi-faceted Creative Studios ,Digital
        Marketing and a Software Development Company geared at delivering
      </p>

      <div
        id="style-2"
        className="w-[80%] mx-auto mt-[3vw] flex    overflow-x-scroll  gap-10 "
      >
        {video_link.map((each_video, index) => {
          return (
            <div
              className="relative section"
              key={index + Math.random()}
              onClick={() => {
                set_video_id(each_video.youtube_link);
              }}
            >
              <div
                className="relative w-[200px] h-[200px] bg-[#353535] shadow-md object-cover cursor-pointer"
                onClick={() => {
                  set_video_id(each_video.youtube_link);
                }}
              >
                <Image
                  src={each_video.thumbail}
                  className="object-cover "
                  fill
                ></Image>
              </div>
              {
                <img
                  src="/play_btn.svg"
                  className=" w-[4vw] absolute_centering cursor-pointer"
                ></img>
              }
            </div>
          );
        })}
      </div>

      <div className="w-full h-[3vw] md:h-[1vw]  mt-[1vw] xl:mt-[-20px]  max-h-[30px] "></div>
    </div>
  );
};

export default VideoPortfolio;
