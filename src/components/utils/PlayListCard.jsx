import React, { useState } from "react";
import { HiMiniPlay } from "react-icons/hi2";

function PlayListCard({ img, header, para }) {
  const [showBeforeElement, setShowBeforeElement] = useState(false);

  const handleMouseEnter = () => {
    setShowBeforeElement(true);
  };

  const handleMouseLeave = () => {
    setShowBeforeElement(false);
  };

  return (
    <div
      className="flex flex-col justify-center  px-1 p-1 max-w-[200px] bg-container_bg rounded-md max-h-[100%] relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBeforeElement && (
        <>
          <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-slate-50 text-black p-2 opacity-10"></div>
          <div className="absolute top-[40%] right-[10%] bg-green-500 text-[2rem] opacity-100 rounded-full p-4 z-10">
            <HiMiniPlay />
          </div>
        </>
      )}
      <div className="h-[90%]">
        <img src={`${img}`} alt="playlist_image" className="" />
      </div>
      <div className=" mt-2">
        <h3 className="text-white font-bold text-[0.8rem]">{header}</h3>
        <p className="text-gray_text text-[0.7rem] mt-1 ">{para}</p>
      </div>
    </div>
  );
}

export default PlayListCard;
