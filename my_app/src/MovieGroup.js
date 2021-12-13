import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import styles from "./MovieGroup.module.css";

function MovieGroup({ id, coverImg, title, rating, runtime, year, summary }) {

  return (
    <div className={styles.movie}>

      {/* ShortView (Img, Title, rating, runtime...) */}
      <div className={styles.show}>
        <div className={styles.shortView}>
          <div className={styles.shortView_Img}>
            <img src={coverImg} alt={title} />
          </div>
          <div className={styles.shortView_letters}>
            <h3>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            <p>{year ? `year: ${year}` : null}</p>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            <p>{summary ? summary : null}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

MovieGroup.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  download_count: PropTypes.number,
  summary: PropTypes.string
}

export default MovieGroup;