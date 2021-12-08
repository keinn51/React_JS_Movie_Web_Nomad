import {useEffect, useState}  from "react";

function Hello (){

  useEffect(() => {
    console.log("Hi :)");
    return (() => {
      console.log("By :)");
    });
  }, []);
  return (
    <div>
      <h1>HELLO!</h1>
    </div>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((curr) => !curr)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;