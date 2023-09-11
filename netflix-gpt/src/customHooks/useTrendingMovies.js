import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
  const trendingMovies = useSelector((store) => store.movie.trendingMovies);

  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const getTrendingMovies = () => {
    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addTrendingMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    if (!trendingMovies) getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
