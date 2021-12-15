import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieSearch from "../render/MovieSearch";
// import { Link } from "react-router-dom"
import styles from "./Search.module.css";
import Load from '../component/Load';

// const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Search() {
  const { search, lst } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movArr, setMovArr] = useState([]);

  const getMovies =  () => {
    console.log(`getmovie`)
    for (let i = 1 ; i <= 100; i++)
    {
      fetch(`https://yts.mx/api/v2/list_movies.json?page=${i}&sort_by=rating`)
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
      if (i === 100)
        setLoading(false);
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
      return ;
    else
    {
      setMovArr(([ movArr, ...[movies.filter((movie) => (movie.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1 
        || movie.description_full.toLowerCase().indexOf(search.toLowerCase()) !== -1 
        || movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        ))]]).flat())
    }
    console.log(movies)
  }, [movies])

  return (
    <div className={styles.container}>
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
                year={movie.year} />
            ))}
          </div>
      }
      {/* {
        (loading)
          ? null
          :
          <div className={styles.footer}>
            <div className={styles.list}>
              {
                List_arr.map((lst) => {
                  return (
                    <Link
                      key={lst}
                      to={`/search/${search}/${lst}`}
                    >
                      {lst}</Link>
                  )
                })
              }
            </div>
          </div>
      } */}
    </div>
  )
}

export default Search;