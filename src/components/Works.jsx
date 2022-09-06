import React from "react";
import styled from "styled-components";
import { ServiceLeft, Blur, BlackCircle } from "./styled";
import Upwork from "../assets/img/Upwork.png";
import Fiverr from "../assets/img/fiverr.png";
import Amazon from "../assets/img/amazon.png";
import Shopify from "../assets/img/Shopify.png";
import Facebook from "../assets/img/Facebook.png";

const Works = () => {
  return (
    <StyledWork>
      <WorkLeft>
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
          Obcaecati,
          <br /> repudiandae ab et accusamus in provident <br />
          consequuntur aut ipsa nesciunt vitae?
        </span>
        <button className="button">Hire Me</button>
        <Blur style={{ backgroundColor: "#abf1ff94" }} />
      </WorkLeft>
      <WorkRight>
        <MainCircle>
          <SecondCircle>
            <img src={Upwork} alt="upwork" />
          </SecondCircle>
          <SecondCircle>
            <img src={Facebook} alt="Facebook" />
          </SecondCircle>
          <SecondCircle>
            <img src={Fiverr} alt="Fiverr" />
          </SecondCircle>
          <SecondCircle>
            <img src={Amazon} alt="Amazon" />
          </SecondCircle>
          <SecondCircle>
            <img src={Shopify} alt="Shopify" />
          </SecondCircle>
        </MainCircle>
        <BlueCircle />
        <YellowCircle />
      </WorkRight>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  padding: 0rem 3rem;
  display: flex;
  height: 70vh;
  margin: 4rem;
`;
const WorkLeft = styled(ServiceLeft)``;
const WorkRight = styled.div`
  position: relative;
  flex: 1;
`;
const MainCircle = styled.div`
  left: 9rem;
  position: relative;
  width: 18rem;
  height: 18rem;
  border-radius: 100%;
  box-shadow: var(--smboxShadow);
  top: 2rem;
  background: #ffffff;
  & > * {
    position: absolute;
  }
  & > :nth-child(1) {
    top: -3rem;
    left: 6rem;
  }
  & > :nth-child(2) {
    top: 5rem;
    left: -3rem;
  }
  & > :nth-child(3) {
    top: 5rem;
    left: 6rem;
  }
  & > :nth-child(4) {
    top: 5rem;
    left: 15rem;
  }
  & > :nth-child(5) {
    top: 13rem;
    left: 6rem;
  }
`;
const SecondCircle = styled.div`
  width: 6rem;
  height: 6rem;
  position: absolute;
  border-radius: 100%;
  border: 5px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: var(--smboxShadow);
  img {
    transform: scale(0.6);
  }
`;
const BlueCircle = styled(BlackCircle)`
    background-color: #1949b8;
    left: 18rem;
    top: 0rem;
`;
const YellowCircle = styled(BlackCircle)`
background-color: #f5c32c;
    left: 18rem;
    top: 8rem;
`;
export default Works;
