import React from "react";
import { NavLink } from "react-router-dom"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigating = [
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
    <div className="flex justify-around cursor-pointer bg-gray-300 py-4 ">
      <div className="text-3xl pr-10">
        <img className="h-16" src={logo} alt="Logo" />
      </div>
      {navigating.map((item) => (
        <div key={item.to} className="pt-4">
          <NavLink
            to={item.to}
            exact
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-bold px-3 py-2 text-lg rounded-lg" 
                : "text-gray-800 hover:text-red-500 font-bold px-3 text-lg py-2 rounded-md" // Default style with hover effect
            }
          >
            {item.Label}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
