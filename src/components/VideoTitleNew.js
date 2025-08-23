import React from "react";

const VideoTitleNew = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="tet-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
      <div className="my-4">
        <button className="bg-gray-500 text-white px-10 py-2 bg-opacity-50 text-lg hover:bg-opacity-100">
          Play
        </button>
        <button className="bg-gray-500 text-white px-10 py-2 ml-2 bg-opacity-50 text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleNew;
