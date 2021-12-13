import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({ background_image_original, id, coverImg, rating, runtime, description_full, title, genres }) {
  return (
    <div className={styles.movie}>
      {/* Background Img */}
      {
        background_image_original ?
          <div className={styles.background}>
            <img className={styles.Detail_bg} src={background_image_original} alt="" />
          </div>
          : null
      }

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
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            {
              genres ?
                <div>
                  <b>{'genres'}</b>
                  <ul>{genres.map(g => <li key={g}>{g}</li>)}</ul>
                </div>
                : null
            }
          </div>
        </div>

        {/* Description */}
        {
          description_full ?
            <div className={styles.descript}>
              <p>{description_full}</p>
            </div>
            : null
        }
      </div>
    </div>
  )
}

MovieDetail.prototypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_full: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieDetail;