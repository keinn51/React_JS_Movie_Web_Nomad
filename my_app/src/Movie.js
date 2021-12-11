import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.module.css";

function Movie({ movie_style, id, coverImg, rating, runtime, description_full, title, summary, genres }) {
  return (
    <div style={movie_style}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div>
        <span>{rating ? `rating: ${rating} / 10` : null}</span>
        <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
      </div>
      {summary ?
        <div>
          <b>{'<summary>'}</b>
          <p>{summary}</p>
        </div>
        : null
      }
      {
        description_full ?
          <div>
            <b>{'<description>'}</b>
            <p>{description_full}</p>
          </div>
          : null
      }
      {
        genres ?
          <div>
            <b>{'<genres>'}</b>
            <ul>{genres.map(g => <li key={g}>{g}</li>)}</ul>
          </div>
          : null
      }
    </div>
  )
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;