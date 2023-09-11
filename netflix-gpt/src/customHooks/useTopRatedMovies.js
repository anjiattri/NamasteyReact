import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const getTopRatedMovies = () => {
    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addTopRatedMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    if (!topRatedMovies) getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
