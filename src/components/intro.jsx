import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <StyledIntro>
      <IntroLeft>
          <div>
              <span>Hy! I Am</span>
              <span>James</span>
              <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
          </div>
          <button>
              Hire Me 
          </button>
      </IntroLeft>
      <IntroRight></IntroRight>
    </StyledIntro>
  );
};

const StyledIntro = styled.div``;
const IntroLeft = styled.div``;

const IntroRight = styled.div``;

export default Intro;
