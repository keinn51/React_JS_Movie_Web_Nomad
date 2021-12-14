import { useEffect, useState } from 'react';
import MovieHome from "./MovieHome";
import styles from "./Slide.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { AllLoading } from "./Atom";
import { useRecoilState } from 'recoil';
import Load from './Load';


function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);
  const [allLoading, setAllLoading] = useRecoilState(AllLoading);

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
    setLoading(false);
    setAllLoading(false);
    // console.log(json.data.movies);
  }

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [allLoading])


  return (
    <div className={styles.container}>
      <div className={styles.slide_show}>
        {(loading || allLoading)
          ? <Load />
          :
          <div className={styles.slides} style={{ transform: `translateX(${trans}px)` }}>
            {
              movies.map((movie) => (
                <MovieHome
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  title={movie.title}
                />
              ))
            }
          </div>
        }
      </div>
      {(loading || allLoading)
        ? null
        :
        <div className={styles.controller}>
          <button className={styles.left} onClick={onClickL}>
            <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
          </button>
          <button className={styles.right} onClick={onClickR}>
            <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
          </button>
        </div>
      }
    </div>
  )
}

export default Slide;