import {useState}  from "react";

function App() {
  const [toDO, settoDO] = useState("");
  const [toDOs, settoDOs] = useState([]);

  const onChange = (event) => {
    settoDO(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDO === "")
      return;
    settoDOs([toDO, ...toDOs]);
  };
  console.log(toDOs);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="To do here!"
        value={toDO}
        onChange={onChange}
        ></input>
        <button>Add To Do!</button>
      </form>
    </div>
  );
}

export default App;