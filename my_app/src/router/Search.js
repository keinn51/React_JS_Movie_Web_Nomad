import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieSearch from "../render/MovieSearch";
import styles from "./Search.module.css";
import Load from '../component/Load';


function Search() {
  const { search, lst } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movArr, setMovArr] = useState([]);

  const getMovies = () => {
    console.log(`getmovie`)
    for (let i = 1; i <= 100; i++) {
      fetch(`https://yts.mx/api/v2/list_movies.json?page=${i}&sort_by=rating`)
        .then((res) => res.json())
        .then((json) => setMovies(json.data.movies))
        .then((i === 100) ? setLoading(false) : null)

    }
  }

  useEffect(() => {
    setLoading(true);
    setMovArr([]);
    getMovies();
    console.log(`lst : ${lst}`)
    console.log(`search: ${search}`)
  }, [search])

  useEffect(() => {
    if (movies.length === 0)
    {
      return;
    }
    else {
      setMovArr(([movArr, ...[movies.filter((movie) => (movie.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1
        || movie.description_full.toLowerCase().indexOf(search.toLowerCase()) !== -1
        || movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ))]]).flat().sort((a, b) => b['rating'] - a['rating']))
    }
    console.log(movies)
  }, [movies])

  return (
    <div className={(search.toLowerCase() === "christmas") ? styles.Santacontainer : styles.container}>
      {
        (loading)
          ? <Load />
          :
          <div className={styles.movies}>
            {movArr.map((movie) => (
              <MovieSearch
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                rating={movie.rating}
                runtime={movie.runtime}
                summary={movie.summary}
                year={movie.year} 
                santa={search}
                />
            ))}
          </div>
      }
    </div>
  )
}

export default Search;