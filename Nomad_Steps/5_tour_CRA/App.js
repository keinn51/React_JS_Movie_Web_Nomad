import Button  from "../Button";
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.btn}>Welcome!</h1>
      <h1 className={styles.btn}>Welcome!</h1>
      <Button text="Change!"/>
    </div>
  );
}

export default App;