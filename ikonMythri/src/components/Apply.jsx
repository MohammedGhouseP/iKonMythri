import React from "react";

const CourseCard = ({ title, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-3  flex flex-col justify-between w-full sm:w-[48%] lg:w-[30%] xl:w-[25%]">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-lg font-bold text-[#e2b951]">{price}</p>
      </div>
      <button className="bg-[#e2b951] text-white px-4 py-2 rounded-md hover:bg-[#d4a840] transition duration-300 mt-4">
        Enroll Now
      </button>
    </div>
  );
};

const CourseCards = () => {
  const courses = [
    {
      id: 1,
      title: "Data Science Professional",
      description:
        "Gain insights into data processing, machine learning, and analytical techniques to become a data expert.",
      price: "3999 INR",
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      description:
        "Learn to build full-stack web applications with front-end and back-end technologies.",
      price: "3999 INR",
    },
    {
      id: 3,
      title: "AI & Machine Learning Expert",
      description:
        "Master AI and ML concepts with real-world applications and hands-on coding projects.",
      price: "5999 INR",
    },
    {
      id: 4,
      title: "Cloud Computing Specialist",
      description:
        "Learn cloud architecture and services like AWS, Azure, and Google Cloud to excel in the IT industry.",
      price: "4999 INR",
    },
    {
      id: 5,
      title: "Cybersecurity Professional",
      description:
        "Understand network security, encryption, and threat detection techniques to protect organizations.",
      price: "6999 INR",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center bg-gray-100">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CourseCards;
