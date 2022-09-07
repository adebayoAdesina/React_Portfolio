import React from "react";
import styled from "styled-components";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import ThemeContext from "../Context/Themecontext";
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // var check = false;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
    // switch (check) {
    //   case false:
    //     theme.dispatch({ type: "toggle" })
    //     check =true;
    //     break;

    //   default:
    //     theme.dispatch({ type: "" });
    //     check =false;
    //     break;
    // }
  };
  return (
    <StyledToggle onClick={handleClick}>
      <Moon />
      <Sun />
      <ToggleButton style={darkMode ? { left: "2px" } : { right: "2px" }} />
    </StyledToggle>
  );
};

const StyledToggle = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid var(--orange);
  border-radius: 1rem;
  position: relative;
  padding: 2px;
  cursor: pointer;
  & > * {
    width: 1rem;
    height: 1rem;
    color: var(--orange);
  }
`;

const ToggleButton = styled.div`
  border-radius: 100%;
  background-color: var(--orange);
  position: absolute;
`;

export default Toggle;
