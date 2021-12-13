import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className={styles.container}>
            <div>
                <Link to={"/"}>SooFLEX</Link>
            </div>
            <div>
                <Link to={`/page/minimum_rating=8/1`}>High Rating</Link>
                <Link to={`/page/genre=romance/1`}>romance</Link>
                <Link to={`/page/genre=music/1`}>music</Link>
                <Link to={`/page/genre=animation/1`}>animation</Link>
            </div>
            <div>
                <a href={""}>IMG</a>
            </div>
        </div>
    )
}

export default Navbar