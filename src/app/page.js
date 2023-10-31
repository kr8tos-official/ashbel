"use client";

import Header from "./components/Header";
import TablularIntro from "./components/TablularIntro";
import SamplePortfolio from "./components/SamplePortfolio";
import VideoPortfolio from "./components/VideoPortfolio";

import OneLayout from "./Layout/OneLayout";
import Testimonials from "./components/Testimonials";
import OurClients from "./components/OurClients";
import Bg from "./components/Bg";

import Modal from "./components/Modal";
import { useStateContext } from "./StateContext/Context";

import { useState } from "react";

export default function Home() {
  const { modal, user_url, set_url, set_show_modal } = useStateContext();
  return (
    <main className="bg-bg_color flex min-h-screen flex-col items-center justify-between ">
      {modal && <Modal url={user_url}></Modal>}

      <Header />
      {/* <OneLayout> */}
      <TablularIntro />

      <SamplePortfolio />
      <VideoPortfolio />

      <OneLayout>
        <OurClients />
      </OneLayout>

      <Testimonials />

      {/* </OneLayout> */}
    </main>
  );
}
