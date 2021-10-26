import React, { useReducer, createContext, useContext } from "react";
import reducer, { ACTIONS } from "./stateReducer";
import { StateProps } from "../types";

interface ContextProps {
  state: StateProps;
  dispatch: React.Dispatch<ACTIONS>;
}

const INITIAL_STATE: StateProps = {
  loading: false,
  coinsData: [],
  error: "",
};

const StateContext = createContext<ContextProps>({} as ContextProps);

const StateProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => useContext(StateContext);

export { useStateContext, StateProvider };
