import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "./components/Table";
import { CoinDataProps } from "./types";
import { parseCoinData } from "./utils";

const URL = "v1/cryptocurrency/listings/latest";
const API_KEY = process.env.REACT_APP_API_KEY || "";

const AppWrapper = styled("div")(() => ({
  width: "100vw",
  height: "100vh",

  "& .inner-app": {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 5px",
  },
}));

const App = () => {
  const [data, setData] = useState<CoinDataProps[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            Accept: "application/json",
            "X-CMC_PRO_API_KEY": API_KEY,
          },
        });

        const coins = await response.json();

        setData(parseCoinData(coins.data));
        if (coins.status.error_code) {
          throw new Error(`${coins.status.error_message}`);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCoins();
  }, []);

  return (
    <AppWrapper>
      <div className="inner-app">
        <Table data={data} />
      </div>
    </AppWrapper>
  );
};

export default App;
