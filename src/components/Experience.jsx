import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <StyledExperience>
      <Achievement>
        <Circle>8+</Circle>
        <span>years</span>
        <span>Experience</span>
      </Achievement>
      <Achievement>
        <Circle>20+</Circle>
        <span>Completed</span>
        <span>Projects</span>
      </Achievement>
      <Achievement>
        <Circle>5+</Circle>
        <span>Companies</span>
        <span>Work</span>
      </Achievement>
    </StyledExperience>
  );
};

const StyledExperience = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  height: 30vh;
  margin-bottom: 8rem;
`;
const Achievement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:nth-of-type(2){
      color: var(--orange);
  }
`;
const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #ffffff;
  border-radius: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  &::before {
    border-radius: 100%;
    content: "";
    background-image: linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%);
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
    position: absolute;
    z-index: -1;
    box-shadow: var(--boxShadow);
  }
`;
export default Experience;
