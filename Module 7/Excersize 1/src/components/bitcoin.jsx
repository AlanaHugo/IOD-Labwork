import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"]; //pass to the API to get data

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]); //set state
  const [rate, setRate] = useState(null);

  useEffect(() => {
    let isMounted = true; // track if component is still mounted

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (isMounted) {
          const newRate = json.bitcoin[currency.toLowerCase()];
          setRate(newRate);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.error("Error fetching data:", error);
        }
      });

    // cleanup function
    return () => {
      isMounted = false;
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>  
          {options}
        </select>
      </label>
      {typeof rate === "number" ? (
        <p>
          1 Bitcoin = {rate.toLocaleString()} {currency}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BitcoinRates;
