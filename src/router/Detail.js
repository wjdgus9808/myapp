import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // const test = await axios.get(
    //   `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    // );

    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(getMovie, []);
  return (
    <div>
      {loading ? (
        <h1>로딩중</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} />
          <h1>{movie.id}</h1>
          <h1>{movie.title}</h1>
          <p>{movie.description_intro}</p>
        </div>
      )}
    </div>
  );
};
export default Detail;
