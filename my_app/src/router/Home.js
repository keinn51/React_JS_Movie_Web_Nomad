import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Slide from "../component/Slide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { Group_obj, Group_key_arr } from "../atom/NavList"

function Home() {

  return (
    <div>
      {Group_key_arr.map((group) => {
        return (
          <div key={group}>
            <div className={styles.title}>
              <div className={styles.titleBox}>
                <Link to={`/page/${Group_obj[group]}/1`}
                style={{"display":"flex", "flexDirection":"row", "alignContent":"center"}}>
                  <div className={styles.titleImg}><FontAwesomeIcon icon={faCompactDisc}
                  ></FontAwesomeIcon></div>
                  <div><span>{group}</span></div>
                </Link>
              </div>
            </div>
            <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`} />
          </div>
        )
      })}
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <h3 className={styles.copyright_letter}>
            Copyright belongs to Kyungsle
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Home;