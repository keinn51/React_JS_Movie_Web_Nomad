import {useEffect, useState}  from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])

  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loding!</strong> : null}
      <ul>
        {coins.map((coins) => <li key={coins.id}>{coins.name} ({coins.symbol}): ${coins.quotes.USD.price} USD</li>)}
      </ul>
    </div>
  );
}

export default App;