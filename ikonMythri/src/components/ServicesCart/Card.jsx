import React from "react";

const Card = ({ img, title, description, btn }) => {
  return (
    <div className="h-1/3 bg-white border-2 p-4 mx-3 rounded-md cursor-pointer">
      <img className="w-full rounded-lg" src={img} alt="Image" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-lg">{description}</p>
      <button className="bg-white px-4 py-2 rounded-md border-2 border-[#e2b951] text-[#e2b951] hover:bg-[#e2b951] hover:text-white">
        {btn}
      </button>
    </div>
  );
};

export default Card;
