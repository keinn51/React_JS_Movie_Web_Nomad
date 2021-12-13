import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import MovieDetail from "./MovieDetail"

function Detail ()
{
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  
    setMovie(json.data.movie);
    setLoading(false);
}


  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
    {
      loading 
      ? <h1>Loading... </h1>
      :
      <div>
        {
        <MovieDetail
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image}
        rating={movie.rating}
        runtime={movie.runtime}
        description_full={movie.description_full}
        background_image_original={movie.background_image_original}
        title={movie.title} 
        genres={movie.genres}
        style_tag="Detail" />
        }
      </div>}
  </div>
  )
}
export default Detail;