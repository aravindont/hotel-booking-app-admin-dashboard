import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const INITIAL_STATE = {
  darkMode: true,
};

export const ThemeContext = createContext(INITIAL_STATE);

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
