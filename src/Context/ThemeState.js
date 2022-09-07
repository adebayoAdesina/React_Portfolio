import { useReducer } from "react";
import ThemeReducer from "./ThemeReducer";
import ThemeContext from "./Themecontext";

const initialState = { darkMode: false };
const ThemeProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
