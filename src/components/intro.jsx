import React, { useContext } from "react";
import styled from "styled-components";
import GitHub from "../assets/img/github.png";
import Linkedin from "../assets/img/linkedin.png";
import Instagram from "../assets/img/instagram.png";
import Vector1 from "../assets/img/Vector1.png";
import Vector2 from "../assets/img/Vector2.png";
import Boy from "../assets/img/boy.png";
import Thumbup from "../assets/img/thumbup.png";
import Crown from "../assets/img/crown.png";
import Glassesimoji from "../assets/img/glassesimoji.png";
import FloatingDiv from "./FloatingDiv";
import { Blur } from "./styled";
import ThemeContext from "../Context/Themecontext";
import { motion } from "framer-motion";
import { Transition } from "../Animation/animate";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <StyledIntro>
      <IntroLeft>
        <div>
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>James</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button">Hire Me</button>
        <div className="icons">
          <img src={GitHub} alt="github" />
          <img src={Linkedin} alt="linkedin" />
          <img src={Instagram} alt="instagram" />
        </div>
      </IntroLeft>
      <IntroRight>
        <img src={Vector1} alt="vector1" className="image1" />
        <img src={Vector2} alt="vector2" className="image2" />
        <img src={Boy} alt="boy" className="image3" />
        <motion.img
          initial={{ left: "-36%" }}
          animate={{ left: "-24%" }}
          transition={Transition}
          src={Glassesimoji}
          alt="Glassesimoji"
          className="image4"
        />
        <FloatingOne
          initial={{ top: "-4%" }}
          animate={{ left: "74%" }}
          transition={Transition}
        >
          <FloatingDiv image={Crown} text1={"Web"} text2={"Developer"} />
        </FloatingOne>
        <FloatingTwo
          initial={{ top: "18.5rem", left: '10%' }}
          animate={{ left: "0%" }}
          transition={Transition}
        >
          <FloatingDiv image={Thumbup} text1={"Best Design"} text2={"Award"} />
        </FloatingTwo>

        {/* blur div */}
        <Blur style={{ backgroundColor: "rgb(238 210 255)" }} />
        <Blur
          style={{
            backgroundColor: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        />
      </IntroRight>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  display: flex;
  height: 77vh;
  margin-top: 6rem;
  @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
    }
`;
const IntroLeft = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  flex: 1;
  gap: 2;
  @media screen and (max-width: 480px) {
      transform: scale(0.65);
      left: -3.5rem;
      top: -6rem
    }
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    span:nth-child(1) {
      color: var(--black);
      font-size: 3rem;
      font-weight: bold;
    }
    span:nth-child(2) {
      color: var(--orange);
      font-weight: bold;
      font-size: 3rem;
    }
    span:nth-child(3) {
      color: var(--gray);
      font-weight: 100;
      font-size: 1rem;
      margin: 1rem 0rem;
    }
  }
  button {
    width: 12rem;
    font-size: 1.2rem;
  }
  div.icons {
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
  }
  .icons > * {
    width: 3rem;
    :hover {
      cursor: pointer;
    }
  }
`;

const IntroRight = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 480px) {
     margin-top: -3rem;
    }
  & > * {
    z-index: 1;
    position: absolute;
  }

  .image1 {
    transform: scale(0.69);
    left: -15%;
    top: -9%;
    @media screen and (max-width: 480px) {
      transform: scale(0.63);
      left: -6rem;
    }
  }
  .image2 {
    transform: scale(0.67);
    left: -3rem;
    top: -4.6rem;
    @media screen and (max-width: 480px) {
      transform: scale(0.5);
      left: -8rem;
    }
  }
  .image3 {
    transform: scale(1.4);
    left: 28%;
    @media screen and (max-width: 480px) {
      transform: scale(1.2);
      left: 2rem;
    }
  }
  .image4 {
    top: -19%;
    transform: scale(0.6);
    left: -25%;
    border-radius: 50%;
    padding: 0;
    @media screen and (max-width: 480px) {
      transform: scale(0.5);
      left: -8rem;
    }
  }
`;

const FloatingOne = styled(motion.div)`
  top: -4%;
  left: 68%;
  position: absolute;
  z-index: 1000 !important;
  @media screen and (max-width: 480px) {
      transform: scale(0.55);
      
    }
`;

const FloatingTwo = styled(motion.div)`
  top: 18.5rem;
  left: 0rem;
  position: absolute;
  z-index: 1000 !important;
  @media screen and (max-width: 480px) {
      transform: scale(0.55);
      left: -8rem;
    }
`;

export default Intro;
