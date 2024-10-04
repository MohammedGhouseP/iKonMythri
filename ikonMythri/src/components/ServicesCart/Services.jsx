import React from "react";
import Card from "./Card";
import image1 from "../../assets/3DLearning.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export default function CardSlider() {
  const navigate = useNavigate()
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear", // Smooth and continuous transition effect
    pauseOnHover: true, // Pause when hovering over the slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Cards = [
    {
      id: 1,
      img: image1,
      title: "iKonMytri Learning Solutions",
      description: {
        para: "A premier institution offering high-quality training programs to enhance employability and develop essential skills for success.",
        btn: "View Details",
      },
    },
    {
      id: 2,
      img: image1,
      title: "Recruitment Service",
      description: {
        para: "IkonMytri provides comprehensive recruitment and HR services, managing hiring and performance for businesses of all sizes efficiently.",
        btn: "View Details",
      },
    },
    {
      id: 3,
      img: image1,
      title: "BPO Service",
      description: {
        para: "We partner with industries to provide BPO services, allowing organizations to focus on core business while we manage operations.",
        btn: "View Details",
      },
    },
    {
      id: 4,
      img: image1,
      title: "Software Development",
      description: {
        para: "We provide tailored software development services, specializing in high-quality solutions from concept through deployment and ongoing support.",
        btn: "View Details",
      },
    },
  ];

  return (
    <div className="px-20 py-10 gap-10 m-7 text-md bg-gray-300 rounded-xl " >
      <Slider {...settings} >
        {Cards.map((card) => (
          <div key={card.id} className="m-3 " onClick={() => navigate("/service")}>
            <Card className="p-10 "
              img={card.img}
              title={card.title}
              description={card.description.para}
              btn={card.description.btn}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}


