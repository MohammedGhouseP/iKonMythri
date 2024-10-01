import React from "react";
import Card from "./Card";
import image1 from "../../assets/3DLearning.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//  function Services() {
export default function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Number of cards to show
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // 3 seconds
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

 
  // const Cards = [
  //   {
  //     id: 1,
  //     img: image1,
  //     title: "iKonMytri Learning Solutions",
  //     description: (
  //       <div>
  //         <p>A premier institution offering high-quality training to enhance employability skills.</p>
  //         <hr className="border-t-2 border-gray-300 my-4" />
  //         <p className="text-lg font-bold py-2">
  //           <span className="text-lg font-normal underline">Opportunities: </span> marketing, finance, software developer, project manager, data analyst, and marketing specialist.
  //         </p>
  //       </div>
  //     ),
  //     button: "View Details",
  //   },
  //   {
  //     id: 2,
  //     img: image1,
  //     title: "Recruitment Service",
  //     description: (
  //       <div>
  //         <p>IkonMytri offers recruitment and HR services for businesses of all sizes. Our team of professionals handles everything from hiring new employees to monitoring performance, eliminating the need for additional HR resources.</p>
  //         <hr className="border-t-2 border-gray-300 my-4" />
  //         <p className="text-lg font-bold py-2">
  //           <span className="text-lg font-normal underline">Opportunities: </span> HR Specialist, Recruiter, Performance Manager.
  //         </p>
  //       </div>
  //     ),
  //     button: "View Details",
  //   },
  //   {
  //     id: 3,
  //     img: image1,
  //     title: "BPO Service",
  //     description: (
  //       <div>
  //         <p>At IkonMytri, we partner with various industries to provide BPO services that allow organizations to focus on their core business while we manage their work processes.</p>
  //         <hr className="border-t-2 border-gray-300 my-4" />
  //         <p className="text-lg font-bold py-2">
  //           <span className="text-lg font-normal underline">Opportunities: </span> BPO Specialist, Operations Manager, Customer Relationship Manager.
  //         </p>
  //       </div>
  //     ),
  //     button: "View Details",
  //   },
  //   {
  //     id: 4,
  //     img: image1,
  //     title: "Software Development",
  //     description: (
  //       <div>
  //         <p>We offer tailored software development services to meet your business needs. Our team specializes in designing, developing, and maintaining high-quality software, ensuring efficient execution from concept to deployment with ongoing support.</p>
  //         <hr className="border-t-2 border-gray-300 my-4" />
  //         <p className="text-lg font-bold py-2">
  //           <span className="text-lg font-normal underline">Opportunities: </span> Software Developer, Project Manager, QA Engineer.
  //         </p>
  //       </div>
  //     ),
  //     button: "View Details",
  //   },
  // ];



  const Cards = [
    {
      id: 1,
      img: image1,
      title: "iKonMytri Learning Solutions",
      description: (
        <div>
          <p className="py-3">A premier institution offering high-quality training programs to enhance employability and develop essential skills for success.</p>
          <hr className="border-t-2 border-gray-300 my-4" />
          <p className="text-lg font-bold py-2">
            <span className="text-lg font-normal underline">Opportunities: </span> software developer, project manager, data analyst and marketing specialist.
          </p>
        </div>
      ),
      button: "View Details",
    },
    {
      id: 2,
      img: image1,
      title: "Recruitment Service",
      description: (
        <div>
          <p className="py-3">IkonMytri provides comprehensive recruitment and HR services, managing hiring and performance for businesses of all sizes efficiently.</p>
          <hr className="border-t-2 border-gray-300 my-4" />
          <p className="text-lg font-bold py-2">
            <span className="text-lg font-normal underline">Opportunities: </span> HR Specialist, Recruiter, Performance Manager.
          </p>
        </div>
      ),
      button: "View Details",
    },
    {
      id: 3,
      img: image1,
      title: "BPO Service",
      description: (
        <div>
          <p className="py-3">We partner with industries to provide BPO services, allowing organizations to focus on core business while we manage operations.</p>
          <hr className="border-t-2 border-gray-300 my-4" />
          <p className="text-lg font-bold py-2">
            <span className="text-lg font-normal underline">Opportunities: </span> BPO Specialist, Operations Manager, Customer Relationship Manager.
          </p>
        </div>
      ),
      button: "View Details",
    },
    {
      id: 4,
      img: image1,
      title: "Software Development",
      description: (
        <div>
          <p className="py-3">We provide tailored software development services, specializing in high-quality solutions from concept through deployment and ongoing support.</p>
          <hr className="border-t-2 border-gray-300 my-4" />
          <p className="text-lg font-bold py-2">
            <span className="text-lg font-normal underline">Opportunities: </span> Software Developer, Project Manager, QA Engineer.
          </p>
        </div>
      ),
      button: "View Details",
    },
  ];
  

  

  return (
    <>
  {/* Card content goes here */}
      <div className="px-20  py-10 gap-10 m-7">
        <Slider {...settings}>
          {Cards.map((card) => (
            <div key={card.id} className="m-3">
              <Card
                key={card.id}
                img={card.img}
                title={card.title}
                description={card.description}
                button={card.button}
              />
            </div>
          ))}
        </Slider>
      </div>

    </>
  );
}
