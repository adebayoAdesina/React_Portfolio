import React from "react";
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

const Intro = () => {
  return (
    <StyledIntro>
      <IntroLeft>
        <div>
          <span>Hy! I Am</span>
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
        <img src={Glassesimoji} alt="Glassesimoji" className="image4" />
        <FloatingOne>
          <FloatingDiv image={Crown} text1={"Web"} text2={"Developer"} />
        </FloatingOne>
        <FloatingTwo>
          <FloatingDiv image={Thumbup} text1={"Best Design"} text2={"Award"} />
        </FloatingTwo>

        {/* blur div */}
        <Blur style={{backgroundColor: 'rgb(238 210 255)'}}/>
        <Blur style={{backgroundColor: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left:'-9rem'}}/>
      </IntroRight>
    </StyledIntro>
  );
};

const StyledIntro = styled.div`
  display: flex;
  height: 77vh;
  margin-top: 6rem;
`;
const IntroLeft = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  flex: 1;
  gap: 2;
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
  & > * {
    z-index: 1;
    position: absolute;
  }

  .image1 {
    transform: scale(0.69);
    left: -15%;
    top: -9%;
  }
  .image2 {
    transform: scale(0.67);
    left: -3rem;
    top: -4.6rem;
  }
  .image3 {
    transform: scale(1.4);
    left: 28%;
  }
  .image4 {
    top: -19%;
    transform: scale(0.6);
    left: -25%;
    border-radius: 50%;
    padding: 0;
  }
`;

const FloatingOne = styled.div`
  top: -4%;
  left: 68%;
  position: absolute;
`;

const FloatingTwo = styled.div`
  top: 18.5rem;
  left: 0rem;
  position: absolute;
`;


export default Intro;
