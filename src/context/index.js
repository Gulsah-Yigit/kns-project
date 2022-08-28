import { createContext, useContext, useReducer } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children, reducer, initialState }) => (
  <GeneralContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GeneralContext.Provider>
);

export const useStateValue = () => useContext(GeneralContext);
