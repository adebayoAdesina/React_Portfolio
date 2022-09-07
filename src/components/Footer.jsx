import React from "react";
import styled from "styled-components";
import Wave from "../assets/img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterBackground src={Wave} alt="wave" />
      <FooterContent>
        <span>example@gmail.com</span>
        <Icons>
          <Insta color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Linkedin color="white" size="3rem" />
        </Icons>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  margin: -0.5rem -3.5rem;
  position: relative;
  margin-top: -7rem;
  @media screen and (max-width: 480px) {
    transform: scale(0.7);
  }
`;
const FooterBackground = styled.img`
  width: 100%;
`;
const FooterContent = styled.div`
  position: absolute;
  padding: 0rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  gap: 2rem;
  color: white;
  @media screen and (max-width: 480px) {
      gap: 1rem;
      margin-left: -2.7rem;
    }
`;
const Icons = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 480px) {
      width: 40%;
    }
`;
export default Footer;
