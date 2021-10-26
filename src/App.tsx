import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "./components/Table";
import NavigationBar from "./components/NavigationBar";
import NavDrawer from "./components/NavDrawer";
import { Chart } from "./components/Chart";
import Notification from "./components/Notification";
import { parseCoinData } from "./utils";
import { useStateContext } from "./contexts/state";
import { setCoins, setError, setLoading } from "./contexts/actions";

const URL = "v1/cryptocurrency/listings/latest";
const API_KEY = process.env.REACT_APP_API_KEY || "";

const AppWrapper = styled("div")(() => ({
  width: "100vw",
  height: "100vh",

  "& .inner-app": {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 5px",
    height: "100%",
  },
}));

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    state: { loading, error },
    dispatch,
  } = useStateContext();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(URL, {
          headers: {
            Accept: "application/json",
            "X-CMC_PRO_API_KEY": API_KEY,
          },
        });

        const coins = await response.json();
        dispatch(setCoins(parseCoinData(coins.data)));

        if (coins.status.error_code) {
          throw new Error(`${coins.status.error_message}`);
        }
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setError(err.message));
        }
        console.log(err);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchCoins();
  }, [dispatch]);

  return (
    <AppWrapper>
      <BrowserRouter>
        <NavigationBar toggleDrawer={toggleDrawer} />
        <div className="inner-app">
          {loading ? (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Notification
                open={!!error}
                error={error}
                handleClose={() => dispatch(setError(""))}
              />
              <NavDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
              <Switch>
                <Route path="/liquidity">
                  <Chart />
                </Route>
                <Route path="/" component={Table} />
              </Switch>
            </>
          )}
        </div>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
