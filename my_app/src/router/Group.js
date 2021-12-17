import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieGroup from "../render/MovieGroup";
import { Link } from "react-router-dom"
import styles from "./Group.module.css";
import Load from '../component/Load';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group() {
  const { group, page } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // console.log(`getMovie`)
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    // console.log(movies[0])
  }

  useEffect(() => {
    // console.log(`useEffect`)
    setLoading(true);
    getMovies();
    return ;
  }, [group, page])

  return (
    <div className={styles.container}>
      {
        (loading)
          ? <Load />
          :
          <div className={styles.movies}>
            {movies.map((movie) => (
              <MovieGroup
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
      {
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
                      to={`/page/${group}/${lst}`}
                    >
                      {lst}</Link>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default Group;