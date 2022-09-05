import React from "react";
import styled from "styled-components";
import HeartEmoji from "../assets/img/heartemoji.png";
import Glasses from "../assets/img/glasses.png";
import Humble from "../assets/img/humble.png";
import { Blur, ServiceLeft } from "./styled";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <StyledServices>
      <ServiceLeft>
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          repudiandae ab et accusamus in provident consequuntur aut ipsa
          nesciunt vitae?
        </span>
        <button className="button">Download CV</button>
        <Blur style={{ backgroundColor: "#abf1ff94" }} />
      </ServiceLeft>
      <ServiceRight>
        <ServiceCardOne>
          <ServiceCard
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </ServiceCardOne>
        <ServiceCardTwo>
          <ServiceCard
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React"}
          />
        </ServiceCardTwo>
        <ServiceCardThree>
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
            left: "14rem",
            top: "8rem",
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

const ServiceCardOne = styled.div`
  left: 14rem;
  position: absolute;
`;
const ServiceCardTwo = styled.div`
  top: 12rem;
  left: -4rem;
  position: absolute;
`;
const ServiceCardThree = styled.div`
  position: absolute;
  left: 12rem;
  top: 20rem;
`;
export default Services;
