import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";
import default_Img from "./Img/default_Img.jpeg";
import default_Back_Img from "./Img/default_back.jpeg";

const onErrorImg = (e) => {
  e.target.src = default_Img;
}

const onErrorBackImg = (e) => {
  e.target.src = default_Back_Img;
}

function MovieDetail({ background_image_original, coverImg, rating, runtime, description_full, title, genres }) {
  return (
    <div className={styles.movie}>
      {/* Background Img */}
      <div className={styles.background}>
        <img className={styles.Detail_bg} src={background_image_original} alt="" onError={onErrorBackImg} />
      </div>
      {/* ShortView (Img, Title, rating, runtime...) */}
      <div className={styles.show}>
        <div className={styles.shortView}>
          {/* Img */}
          <div className={styles.shortView_Img}>
            <img src={coverImg} alt={title} onError={onErrorImg} />
          </div>
          {/* title, rating, runtime, genre */}
          <div className={styles.shortView_letters}>
            <h3>
              {title}
            </h3>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            {
              genres ?
                // genre is the 'array'
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
  background_image_original: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_full: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieDetail;