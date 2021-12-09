import {useEffect, useState}  from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [enterButton, setEnterButton] = useState(false);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
    setEnterButton((curr) => (curr = false));
  }

  const onClick = () => {
    setBuyList(coins.filter((coins) => money > coins.quotes.USD.price))
    setEnterButton((curr) => (curr = true));
  }

  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {
        loading 
        ? <strong>Loding!</strong> 
        : 
        <div>
          <h2>Enter Your Money (USD)</h2>
          <input
            type="text"
            placeholder="money"
            value={money}
            onChange={onChange}
          ></input>
          <button onClick={onClick}>Search!</button>

          {
            enterButton
            ? 
            <div>
              <h2>You Can Buy! ({buyList.length})</h2>
              <ul>
                {buyList.map((coins) => <li key={coins.id}>
                  {coins.name} === {Math.floor(money / coins.quotes.USD.price)} ({coins.symbol}) 
                  </li>)}
              </ul>
            </div>
            : null
          }
        </div>
      }
    </div>
  );
}

export default App;