"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [modal, set_show_modal] = useState(false);
  const [user_url, set_url] = useState("/sample_images/LightPainting.jpg");
  const [mouseY, setMouseY] = useState(0);

  //   useEffect(() => {
  //     if (!modal) {
  //       const handleMouseMove = (e) => {
  //         setMouseY(e.clientY);
  //       };

  //       window.addEventListener("mousemove", handleMouseMove);

  //       return () => {
  //         // Clean up the event listener when the component unmounts
  //         window.removeEventListener("mousemove", handleMouseMove);
  //       };
  //     }
  //   }, [modal]);

  return (
    <Context.Provider
      value={{
        modal,
        set_show_modal,
        user_url,
        set_url,
        mouseY,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
