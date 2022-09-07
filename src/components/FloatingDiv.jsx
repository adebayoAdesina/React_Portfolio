import React, {useContext} from "react";
import styled from "styled-components";
import ThemeContext from "../Context/Themecontext";


const FloatingDiv = ({ image, text1, text2 }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Floating >

        <img src={image} alt="crown" />
        <span style={{color: darkMode ? 'black' : ''}}>
        {text1}<br />{text2}
      </span>

      
    </Floating>
  );
};

const Floating = styled.div`
  justify-content: space-between;
  display: flex;
  width: 7rem;
  height: 2.8rem;
  background-color: #fff;
  box-shadow: var(--boxShadow);
  border-radius: 17px;
  z-index: 1000;
  align-items: center;
  position: absolute;
  padding: 0.7rem 1.2rem;
  img {
    width: 2rem;
    margin-right: 1rem;

  }
  span {
      font-size: 16px;
  }
`;

export default FloatingDiv;
