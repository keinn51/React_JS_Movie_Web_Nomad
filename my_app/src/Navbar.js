import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    const Group_obj = { "High Rating": "minimum_rating=8", "Romance": "genre=romance", "Music": "genre=music", "Animation": "genre=animation" };
    const Group_key_arr = Object.keys(Group_obj);

    return (
        <div className={styles.container}>
            <div>
                <Link
                    to={"/"}
                    onClick={() => { setAllLoding(true) }}
                >SooFLEX</Link>
            </div>
            <div className={styles.GroupLink}>
                {
                    Group_key_arr.map((key) => {
                        return (
                            <div className={styles.GroupLink}>
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
            <div>
                <a href={""}>IMG</a>
            </div>
        </div>
    )
}

export default Navbar