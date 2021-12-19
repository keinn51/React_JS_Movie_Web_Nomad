import {useEffect, useState}  from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((curr) => curr + 1);
  const onChange = (event) => setKeyword(event.target.value);

  const iRunOnlyOnce = () => {
    console.log("I run only once~");
  };
  useEffect(iRunOnlyOnce, []);

  const iRunOnlyCounter = () => {
    console.log("I run only Counter");
  };
  useEffect(iRunOnlyCounter, [counter]);

  const iRunOnlyKeyword = () => {
    if (keyword !== "" && keyword.length > 5)
    console.log("I run only keyword");
  };
  useEffect(iRunOnlyKeyword, [keyword]);

  const iRunCounter_Keyword = () => {
    console.log("I run Counter & Keyword");
  };
  useEffect(iRunCounter_Keyword, [keyword, counter]);

  return (
    <div>
      <input 
      type="text"
      placeholder="Search here"
      value={keyword}
      onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;