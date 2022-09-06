import { useReducer } from "react";
import ThemeReducer from "./ThemeReducer";
import ThemeContext from "./Themecontext";

const ThemeProvider = ({ children }) => {
  const initialState = { darkMode: true };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
