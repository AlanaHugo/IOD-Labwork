import { useState, useEffect } from "react";

export function useBitcoin(url) {
  const [bitcoin, setBitcoin] = useState(null);

  useEffect(() => {
    let ignore = false;

    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!ignore) {
            setBitcoin(data);
          }
        })
        .catch((err) => console.error("Fetch error:", err));
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return bitcoin;
}
