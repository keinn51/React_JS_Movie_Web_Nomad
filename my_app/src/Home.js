import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Group from './Group';
import styles from "./Home.module.css";
import Slide from "./Slide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=year`)
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
      <div className={styles.container}>
        <div>
          <Link to={"/"}>SooFLEX</Link>
        </div>
        <div>
          <Link to={`/page/minimum_rating=7/1`}>High Rating</Link>
          <Link to={`/page/genre=romance/1`}>romance</Link>
          <Link to={`/page/genre=drama/1`}>drama</Link>
          <Link to={`/page/genre=animation/1`}>animation</Link>
        </div>
        <div>
          <a href={""}>IMG</a>
        </div>
      </div>

      <div className={styles.title}>
        <Link to={`/page/genre=romance/1`}>
          <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
          <span>romance</span>
        </Link>
      </div>

      <div>
      {loading
        ? <h1>Loading...</h1>
        : 
        <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?&genre=romance&sort_by=year`}/>
      }
      </div>

      <div className={styles.title}>
        <Link to={`/page/genre=drama/1`}>
          <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
          <span>drama</span>
        </Link>
      </div>

      <div>
      {loading
        ? <h1>Loading...</h1>
        : 
        <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?&genre=drama&sort_by=year`}/>
      }
      </div>

      <div className={styles.title}>
        <Link to={`/page/genre=animation/1`}>
          <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
          <span>animation</span>
        </Link>
      </div>

      <div>
      {loading
        ? <h1>Loading...</h1>
        : 
        <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?&genre=animation&sort_by=year`}/>
      }
      </div>
    </div>
  )
}

export default Home;