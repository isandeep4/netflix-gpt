import React, { useRef } from "react";
import { BG_URL } from "./../utils/constants";
import { UseGPTApi } from "../hooks/useGPTApi";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GptSearch = () => {
  const searchText = useRef(null);
  const { fetchGptRecommendation } = UseGPTApi();

  const handleSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". give me only 5 movies, comma separated like the example given ahead. Example result: batman, superman, forrestgump, interstellar.";
    fetchGptRecommendation(gptQuery);
  };

  return (
    <div className="flex flex-col">
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          alt="movies_logo"
          src={BG_URL}
        />
      </div>
      <div className="flex justify-center w-full pt-[22%] md:pt-0">
        <form
          className="mt-[20%] md:mt-[5%] w-full md:w-1/2  bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="col-span-9 p-4 m-4"
            placeholder="what would you like to watch"
          />
          <button
            className="col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </form>
      </div>
      <GPTMovieSuggestion />
    </div>
  );
};
export default GptSearch;
