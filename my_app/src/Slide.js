import { useEffect, useState } from 'react';
import Movie from "./Movie";
import styles from "./Slide.module.css";

function Slide ({ytsApi})
{
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const json = await (
      await fetch(ytsApi)
    ).json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
  }
  useEffect(() => {
    getMovies();
    setLoading(false);
  }, [])


  return (
    <div className={styles.content}>
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
          title={movie.title}  />
        ))
      }
    </div>
  )
}

export default Slide;