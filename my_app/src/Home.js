import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Slide from "./Slide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

function Home() {

  return (
    <div>
      <div className={styles.title}>
        <Link to={`/page/minimum_rating=8/1`}>
          <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
          <span>High Rating (Over 8)</span>
        </Link>
      </div>
      <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&minimum_rating=8&sort_by=rating`} />

      {/* Genres == Romance */}
      <div className={styles.title}>
        <Link to={`/page/genre=romance/1`}>
          <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
          <span>romance</span>
        </Link>
      </div>
      <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=romance&sort_by=rating`} />

      {/* Genres == Music */}
      <div className={styles.title}>
        <Link to={`/page/genre=music/1`}>
          <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
          <span>music</span>
        </Link>
      </div>
      <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=music&sort_by=rating`} />


      {/* Genres == Animation */}
      <div className={styles.title}>
        <Link to={`/page/genre=animation/1`}>
          <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
          <span>animation</span>
        </Link>
      </div>
      <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&genre=animation&sort_by=rating`} />
    </div>

  )
}

export default Home;