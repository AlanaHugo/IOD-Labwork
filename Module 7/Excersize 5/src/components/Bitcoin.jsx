import { useState, useEffect } from "react";
import { useBitcoin } from "../hooks/getBitcoin";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]); //keep Usestate

const bitcoin = useBitcoin(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`
)

const rate = bitcoin?.bitcoin?.[currency.toLowerCase()] ?? null;

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

