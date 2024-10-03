import React, { useEffect, useRef } from "react";
import CardSlider from "./ServicesCart/Services.jsx";
import myVideo from "../assets/Blue-Modern-Technology-Youtube-Video-Intro.mp4";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import AllRoutes from "./AllRoutes.jsx";

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    {
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div>
        <video
          muted
          loop
          width="80%"
          className=" h-3/6 p-4 m-auto py-6 "
          ref={videoRef}
        >
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pt-0 text-center text-[#d3bb7d] font-bold text-4xl">
        iKonMytri SERVICES
      </div>
      <CardSlider />
    </div>
  );
};

export default HomePage;
