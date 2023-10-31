import React from "react";
import {
  main_header_font,
  default_text,
  header_new,
  another_text,
} from "./Data";

import { useState, useEffect } from "react";

const Testimonials = () => {
  //const [testimonials, setTestimonials] = useState([]);
  const testimonials = [
    {
      Testimonial:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is avail",
      Customer_url: "/Clients/client3.jpg",
      Customer_name: "Jeremy Havah",
    },
    {
      Testimonial:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is avail",
      Customer_url: "/Clients/client3.jpg",
      Customer_name: "Jeremy Havah",
    },
    {
      Testimonial:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is avail",
      Customer_url: "/Clients/client3.jpg",
      Customer_name: "Jeremy Havah",
    },
    {
      Testimonial:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is avail",
      Customer_url: "/Clients/client3.jpg",
      Customer_name: "Jeremy Havah",
    },
    {
      Testimonial:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is avail",
      Customer_url: "/Clients/client3.jpg",
      Customer_name: "Jeremy Havah",
    },
  ];

  return (
    <div className="text-text_color mt-[5vw] 2xl:mt-[90px]  py-20">
      <h1 className={header_new}>TESTIMONIALS</h1>

      <p className={another_text}>
        Let’s read some Testimonies from various customers and consumers of
        Ashbel
      </p>
      <br />
      <div className="flex font-[Montserrat]  font-regular  items-center justify-center items-center flex-wrap md:gap-[1vw]   ">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="text-center  w-[45vw] min-w-[300px] min-h-[350px] md:w-[5vw] xl:w-[10vw] 2xl:w-[70px] bg-secondary flex flex-col justify-between items-center bg-gradient-to-b shadow-2xl from-[#353535] py-10 "
            >
              <br />

              <p className="w-[70%] font-thin text-[0.6em]  md:text-[1em] leading-[4vw] md:leading-[20px]">
                {testimonial.Testimonial}
              </p>

              <br />

              <img
                src={testimonial.Customer_url}
                alt={"/User-avatar.svg"}
                className="w-[90px] h-[90px] rounded-full border-[2px] border-[white] object-cover "
              />

              <p className="italic">{testimonial.Customer_name}</p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
