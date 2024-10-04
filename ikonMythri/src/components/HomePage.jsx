import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CardSlider from "./ServicesCart/Services.jsx";
import myVideo from "../assets/Blue-Modern-Technology-Youtube-Video-Intro.mp4";
import job from "../assets/looking_job.avif"

const HomePage = () => {
  const navigation = useNavigate();
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
          className=" h-4/5 p-6 w-10/12 p m-auto "
          ref={videoRef}
        >
          <source src={myVideo} type="video/mp4"/>
        </video>
      </div>
      <div className="pt-0 text-center text-[#d3bb7d] font-bold text-4xl">
        iKonMytri SERVICES
      </div>
      <CardSlider />


      <div className="bg-gray-50 py-16 flex justify-center">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
        <img
          src={job} // Replace with your job-related image URL
          alt="Looking for a job"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#e2b951]">Looking for a Job?</h3>
          <p className="mt-4 text-gray-600">
            We can help you find the perfect opportunity! Explore a range of job openings and take the next step in your
            career with IkonMytri Services. Join us to shape your future.
          </p>
          <div className="mt-6" onClick={()=>navigation('/apply')}>
            <a
              className="inline-block px-6 py-2 text-md border-2  rounded-lg font-semibold border-[#e2b951] text-[#e2b951] hover:bg-[#e2b951] hover:text-white"
            >
              Get the knowledge
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
