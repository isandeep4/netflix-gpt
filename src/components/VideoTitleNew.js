import React from "react";

const VideoTitleNew = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[40%] md:pt-[15%] px-4 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-xs md:text-lg w-full md:w-1/3 text-white">
        {overview}
      </p>
      <div className="my-4">
        <button className="bg-white text-black m-2 px-4 py-1 md:px-10 md:py-2 bg-opacity-50 text-md md:text-lg hover:bg-opacity-100 rounded-lg">
          Play
        </button>
        <button className="bg-gray-500 text-white px-4 py-1 md:px-10 md:py-2 md:ml-2 bg-opacity-50 text-md md:text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleNew;
