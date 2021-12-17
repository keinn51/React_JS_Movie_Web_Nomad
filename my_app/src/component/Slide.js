import { useEffect, useState } from 'react';
import MovieSlide from "../render/MovieSlide";
import styles from "./Slide.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import Load from '../component/Load';

// Home Slide show!
function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

  // onClick : When you touch the Button, start the func. trans the slide with 460px.
  // 460px : one container is 230px, 460px -> two container
  // >= 0 : The End of the Right!
  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans(current => current + 460);
  }

  // -1380 : 230 * 6, so the button can be clicked only 3 times
  const onClickR = () => {
    if (trans <= -1380) {
      return;
    }
    setTrans(current => current - 460);
  }

  // get ytsApi from Home.js seperated by group name.
  const getMovies = async () => {
    const json = await (
      await fetch(ytsApi)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.slide_show}>
        {/* Rendering when loading Ends! */}
        {(loading)
          ? <Load />
          :
          <div className={styles.slides} style={{ transform: `translateX(${trans}px)` }}>
            {
              movies.map((movie) => {
                if (movie.medium_cover_image != null)
                {
                  return (
                    (
                      // MovieSlide is redering code with Slide!
                      <MovieSlide
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        title={movie.title}
                      />
                    )
                  )
                }
              })
            }
          </div>
        }
      </div>

      {/* Button with FontAwesome */}
      {(loading)
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