import { useEffect, useState } from 'react';
import Movie from "./Movie";
import styles from "./Slide.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';


function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans(current => current + 460);
  }
  const onClickR = () => {
    if (trans <= -1380) {
      return;
    }
    setTrans(current => current - 460);
  }

  const getMovies = async () => {
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
    <div className={styles.container}>
      <div className={styles.slide_show}>
        {loading
          ? <h1>Loading...</h1>
          :
          <div className={styles.slides} style={{ transform: `translateX(${trans}px)` }}>
            {
              movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  title={movie.title} />
              ))
            }
          </div>
        }
      </div>
      {loading
          ? <h1>Loading...</h1>
          :
          <div className={styles.controller}>
            <button class={styles.left} onClick={onClickL}>
              <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
            </button>
            <button class={styles.right} onClick={onClickR}>
              <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
            </button>
          </div>
        }
    </div>
  )
}

export default Slide;