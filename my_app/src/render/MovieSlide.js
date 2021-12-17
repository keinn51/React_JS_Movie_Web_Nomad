import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieSlide.module.css";
import default_Img from "./Img/default_Img.jpeg";

const onErrorImg = (e) => {
  e.target.src = default_Img;
}

function MovieSlide({ id, coverImg, rating, runtime, title }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} onError={onErrorImg}/>
      </Link>
      <div className={styles.letters}>
        <div className={styles.title}>
          <div>
            <h3 className={styles.movieName}>
              <Link to={`/movie/${id}`}>
                {(title.length > 35)
                  ? `${title.slice(0, 35)}...`
                  : title}
              </Link>
            </h3>
          </div>
        </div>
        <span>{rating ? `rating: ${rating} / 10` : null}</span>
        <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
      </div>
    </div>
  )
}

MovieSlide.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieSlide;