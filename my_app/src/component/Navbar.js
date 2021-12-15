import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Navbar() {
    const [search, setSearch] = useState(null);

    const searchClick = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.pageName}>
                <Link to={"/"} >SooFLEX</Link>
            </div>
            <div className={styles.GroupLink}>
                {
                    Group_key_arr.map((key) => {
                        return (
                            <div className={styles.Link} key={key}>
                                <div>
                                    <Link
                                        to={`/page/${Group_obj[key]}/1`}
                                    >{key}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.searchBar}>
                <div>
                    <input
                        type="text"
                        placeholder="Search Movie!"
                        value={search}
                        onChange={searchClick}>
                    </input>
                    <Link to={`/search/${search}/1`}>
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar