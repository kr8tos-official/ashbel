import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  main_header_font,
  header_3,
  default_text,
  another_text,
  header_new,
} from "../components/Data";
const OurClients = () => {
  const clients = [
    {
      project_name: "Akuofie Wedding",
      project_field: "Photography",
      project_url: "/Clients/client1.jpg",
      project_link: "/",
    },
    {
      project_name: "Ashbel Designs",
      project_field: "Photography",
      project_url: "/Clients/client2.jpg",
      project_link: "/",
    },
    {
      project_name: "Akuofie Wedding",
      project_field: "Photography",
      project_url: "/Clients/client3.jpg",
      project_link: "/",
    },
    {
      project_name: "Akuofie Wedding",
      project_field: "Photography",
      project_url: "/Clients/client4.jpg",
      project_link: "/",
    },
    {
      project_name: "Akuofie Wedding",
      project_field: "Photography",
      project_url: "/Clients/client4.jpg",
      project_link: "/",
    },
    {
      project_name: "Akuofie Wedding",
      project_field: "Photography",
      project_url: "/Clients/client4.jpg",
      project_link: "/",
    },
  ];

  return (
    <div className="w-full  mt-[5vw] text-center   cursor-pointer tracking-[.2em]   ">
      <p className={header_new}>Our</p>
      <p className={header_new}>Clients</p>
      <p className={another_text}>
        Let’s read some Testimonies from various customers and consumers of
        Ashbel
      </p>

      <div
        id="style-2"
        className="flex items-center w-full flex-wrap gap-[0.7em] justify-around w-[80%] mx-auto"
      >
        {clients.map((each_client, index) => {
          return (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? `text-[0.8vw] tracking-[0.1em] text-left mt-[4vw] `
                  : `text-[0.8vw] tracking-[0.1em] text-left `
              }
            >
              <div className="hover:scale-110 duration-300 relative w-[30vw] h-[40vw]  max-w-[300px] max-h-[430px]">
                <Image
                  fill
                  src={each_client.project_url}
                  className="object-cover"
                ></Image>
              </div>
              <Link href={each_client.project_link}>
                <p className=" text-[2vw] 2xl:text-[20px]">
                  {each_client.project_name}
                </p>
                <p className=" text-[1.4vw] font-thin 2xl:text-[15px]">
                  {each_client.project_field}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[10px] bg-[white] mt-[5vw]"> </div>
    </div>
  );
};

export default OurClients;
