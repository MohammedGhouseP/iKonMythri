import React from "react";

const Card = ({ img, title, description, btn }) => {
  return (
    <div className="bg-white border-2 p-4 mx-3 rounded-md h-[430px] flex flex-col justify-between ">
      <div>
        <img className="w-full rounded-lg mb-4" src={img} alt="Image" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <button className="relative bg-white px-4 py-2 w-2/4  rounded-md border-2 border-[#e2b951] text-[#e2b951] hover:bg-[#e2b951] hover:text-white">
        {btn}
      </button>
    </div>
  );
};

export default Card;
