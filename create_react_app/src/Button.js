import PropTyopes from "prop-types";
import styles from "./Button.module.css"

const Button = function ({text})
{
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
    text: PropTyopes.string.isRequired
}

export default Button;