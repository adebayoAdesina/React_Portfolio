import React, { useContext } from "react";
import styled from "styled-components";
import HeartEmoji from "../assets/img/heartemoji.png";
import Glasses from "../assets/img/glasses.png";
import Humble from "../assets/img/humble.png";
import { Blur, ServiceLeft } from "./styled";
import ServiceCard from "./ServiceCard";
import ThemeContext from "../Context/Themecontext";
import { motion } from "framer-motion";
import { Transition } from "../Animation/animate";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <StyledServices>
      <ServiceLeft>
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          repudiandae ab et accusamus in provident consequuntur aut ipsa
          nesciunt vitae?
        </span>
        <button className="button">Download CV</button>
        <Blur
          style={{ backgroundColor: darkMode ? "var(--orange)" : "#abf1ff94" }}
        />
      </ServiceLeft>
      <ServiceRight>
        <ServiceCardOne
          initial={{ top: "-4%", left: "18rem" }}
          animate={{ left: "14rem" }}
          transition={Transition}
        >
          <ServiceCard
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </ServiceCardOne>
        <ServiceCardTwo
          initial={{ top: "-4%", left: "18rem" }}
          animate={{ top: "12rem", left: "-4rem" }}
          transition={Transition}
        >
          <ServiceCard
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React"}
          />
        </ServiceCardTwo>
        <ServiceCardThree
          initial={{ top: "-4%", left: "18rem" }}
          animate={{ left: "12rem", top: "20rem" }}
          transition={Transition}
        >
          <ServiceCard
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, perspiciatis."
            }
          />
        </ServiceCardThree>
        <Blur
          style={{
            backroundColor: "var(--purple)",
          }}
        />
      </ServiceRight>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  padding: 0rem 3rem;
  display: flex;
  height: 90vh;
  margin-bottom: 8rem;
  margin-top: 8rem;
`;
const ServiceRight = styled.div`
  flex: 1;

  position: relative;
`;

const ServiceCardOne = styled(motion.div)`
  left: 14rem;
  position: absolute;
`;
const ServiceCardTwo = styled(motion.div)`
  top: 12rem;
  left: -4rem;
  position: absolute;
`;
const ServiceCardThree = styled(motion.div)`
  position: absolute;
  left: 12rem;
  top: 20rem;
`;
export default Services;
