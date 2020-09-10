import React, {
  createContext,
  useReducer,
  useContext,
} from "react";

// prepare data layer
export const StateContext = createContext();

//wrap the app and provide the data layer
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = ()=>useContext(StateContext); 