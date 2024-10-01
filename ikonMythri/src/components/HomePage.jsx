import React, { useEffect, useRef } from "react";
// import Services from "./ServicesCart/";
import CardSlider from "./ServicesCart/Services.jsx";
import Footer from "./Footer.jsx";

const HomePage = ({ videoSrc }) => {
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
          className=" h-3/6 p-4 m-auto "
          ref={videoRef}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="pt-0 text-center text-[#d3bb7d] font-bold text-4xl">
        iKonMytri SERVICES
      </div>
      <CardSlider />
      <Footer/>
    </div>
  );
};

export default HomePage;
