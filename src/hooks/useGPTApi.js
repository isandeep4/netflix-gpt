import { useDispatch } from "react-redux";
import openaiClient from "./../utils/openAI";
import { UseFetchTMDBMovies } from "./useFetchTMBDMovies";
import { addGptMovies } from "../utils/gptSlice";

export const UseGPTApi = () => {
  const dispatch = useDispatch();
  const { fetchTMBDMovies } = UseFetchTMDBMovies();
  const fetchGptRecommendation = async (gptQuery) => {
    const response = await openaiClient.responses.create({
      model: "gpt-3.5-turbo",
      input: gptQuery,
      store: true,
    });
    const moviesNames = response.output_text.split(",");
    const allMoviePromises = moviesNames.map((movie) => fetchTMBDMovies(movie));
    const moviesResult = await Promise.all(allMoviePromises);
    dispatch(
      addGptMovies({ moviesNames: moviesNames, moviesResult: moviesResult })
    );
  };
  return { fetchGptRecommendation };
};
