import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Navbar() {
    const [search, setSearch] = useState(null);

    // Event when u touch the Search Bar!
    const searchClick = (event) => {
        setSearch(event.target.value)
    }

    return (
        // It's the Navigation Bar, always above the container!!
        <div className={styles.container}>
            {/*  Page Name */}
            <div className={styles.pageName}>
                <Link to={"/"} >SooFLEX</Link>
            </div>

            {/* Group Links */}
            <div className={styles.GroupLink}>
                {
                    Group_key_arr.map((key) => {
                        return (
                            <div className={styles.Link} key={key}>
                                <div className={styles.Link_sep}>
                                    <Link
                                        to={`/page/${Group_obj[key]}/1`}
                                    >{key}</Link>
                                </div>
                            </div>
                        )
                    })
                }
                {/* 🎄 Merry Christmas! */}
                <div className={styles.MerryChristMas}><Link to={`/search/christmas/1`}>Christmas🎄</Link></div>
            </div>

            {/* Search Bar */}
            <div className={styles.searchBar}>
                <div>
                    <form>
                        {/* Search Text */}
                        <input
                            type="text"
                            placeholder="Search Movie!"
                            value={search}
                            onChange={searchClick}
                            onMouseOut={() => { setSearch("") }}
                        >
                        </input>
                        {/* Search Button */}
                        <Link to={`/search/${search}/1`}>
                            <button>
                                <FontAwesomeIcon icon={faSearch} size="lg" />
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Navbar