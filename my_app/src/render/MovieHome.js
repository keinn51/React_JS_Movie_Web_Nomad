import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieHome.module.css";

function MovieHome({ id, coverImg, rating, runtime, title }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} />
      <div className={styles.letters}>
        <div className={styles.title}>
          <div>
            <h3>
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

MovieHome.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieHome;