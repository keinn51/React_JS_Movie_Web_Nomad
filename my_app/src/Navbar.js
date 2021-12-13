import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import {AllLoading} from "./Atom";
import { useSetRecoilState } from "recoil";

function Navbar() {
    const setAllLoding = useSetRecoilState(AllLoading);

    return (
        <div className={styles.container}>
            <div>
                <Link 
                to={"/"}
                onClick={() => {setAllLoding(true)}}
                >SooFLEX</Link>
            </div>
            <div>
                <Link 
                to={`/page/minimum_rating=8/1`}
                onClick={() => {setAllLoding(true)}}
                >High Rating</Link>
                <Link 
                to={`/page/genre=romance/1`}
                onClick={() => {setAllLoding(true)}}
                >romance</Link>
                <Link 
                to={`/page/genre=music/1`}
                onClick={() => {setAllLoding(true)}}
                >music</Link>
                <Link 
                to={`/page/genre=animation/1`}
                onClick={() => {setAllLoding(true)}}
                >animation</Link>
            </div>
            <div>
                <a href={""}>IMG</a>
            </div>
        </div>
    )
}

export default Navbar