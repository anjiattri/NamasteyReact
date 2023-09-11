import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  const getMovieTrailer = () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

    fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => {
        const filterData = json.results.filter(
          (ele) => ele.type === "Trailer"
        )[0];
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    if (!trailerVideo) getMovieTrailer();
  }, []);
};
export default useTrailerVideo;
