import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/logo.png";

export default function Navbar() {
  const naving = [
    {
      to: "/",
      Label: "Home",
    },
    {
      to: "/about",
      Label: "About",
    },
    {
      to: "/service",
      Label: "Services",
    },
    {
      to: "/blog",
      Label: "Blog",
    },
    {
      to: "/contact",
      Label: "Contact",
    },
  ];

  return (
    <div className="flex justify-around cursor-pointer bg-red-50 py-4 ">
      <div className="text-3xl pr-10">
        <img className="h-16 " src={logo} alt="" />
      </div>
      {naving.map((item) => (
        <div key={item.to} className="text-lg hover:text-red-500  pt-4  ">
          <Link to={item.to}>
          {item.Label}
          </Link>
        </div>
      ))}
    </div>
  );
}
