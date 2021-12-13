import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import MovieGroup from "./MovieGroup";
import {Link} from "react-router-dom"

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function Group ()
{
  const {group, page} = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
    ).json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
  }

  useEffect(() => {
    getMovies();
    setLoading(false);
  }, [loading])


  return (
    <div>
      {loading
        ? <h1>Loading...</h1>
        : 
        movies.map((movie) => (
          <MovieGroup
          key={movie.id}
          id={movie.id}
          title={movie.title}
          coverImg={movie.medium_cover_image}
          rating={movie.rating}
          runtime={movie.runtime}
          summary={movie.summary}
          year={movie.year}/>
        ))
      }
    {
      loading 
      ? <h1>Loading...</h1>
      :
      List_arr.map((lst) => {
        return (
          <Link 
          to={`/page/${group}/${lst}`}
          onClick={() => setLoading(true)}
          >
          {lst}</Link>
        )
      })
    }
    </div>
  )
}

export default Group;