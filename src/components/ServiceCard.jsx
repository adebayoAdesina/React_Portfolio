import React from "react";
import styled from "styled-components";

const ServiceCard = ({ emoji, heading, detail }) => {
  return (
    <Cards>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button>Learn More</button>
    </Cards>
  );
};
const Cards = styled.div`
  width: 10rem;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.26);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  border: 7px solid var(--orangeCard);
  box-shadow: var(--boxShadow);
  border-radius: 20px;
  padding: 0px 26px 2rem 26px;
  z-index: 10;
  img {
    transform: scale(0.5);
    margin-bottom: -3rem;
    margin-top: -2rem;
  }
  span:nth-of-type(2) {
    color: var(--gray);
    font-size: 16px;
  }
  button {
    border-color: #ffffff;
    box-shadow: 0px 19px 60px rgba(0, 0, 0, 0.08);
    border-radius: 7px;
    border: none;
    padding: 10px;
    font-size: 16px;
    color: #5290fd;
  }
`;
export default ServiceCard;
