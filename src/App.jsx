import MainPage from "./pages/main";
import "./App.css";
import { useContext } from "react";
import ThemeContext from "./Context/Themecontext";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <MainPage />
    </div>
  );
}

export default App;
