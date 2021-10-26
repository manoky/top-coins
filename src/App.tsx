import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Table from "./components/Table";
import NavigationBar from "./components/NavigationBar";
import NavDrawer from "./components/NavDrawer";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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
      <BrowserRouter>
        <NavigationBar toggleDrawer={toggleDrawer} />
        <div className="inner-app">
          <NavDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
          <Switch>
            <Route path="/">
              <Table data={data} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
