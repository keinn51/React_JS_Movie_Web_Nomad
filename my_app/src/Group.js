import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Movie from "./Movie";

function Group ()
{
  const {group, page} = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
  }
  useEffect(() => {
    getMovies();
    setLoading(false);
  }, [])


  return (
    <div>
      {loading
        ? <h1>Loading...</h1>
        : 
        movies.map((movie) => (
          <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          rating={movie.rating}
          runtime={movie.runtime}
          summary={movie.summary}
          title={movie.title} 
          genres={movie.genres} />
        ))
      }
    </div>
  )
}

export default Group;