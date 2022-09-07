import styled from "styled-components"

export const Blur = styled.div`  
  z-index: 0 !important;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  background: #edd0ff;
  filter: blur(72px);
  top: -18%;
  left: 56%;
`;

export const ServiceLeft = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  span:nth-child(1) {
    color: var(--black);
    font-size: 2.5rem;
    font-weight: bold;
  }
  span:nth-child(2) {
    color: var(--orange);
    font-size: 2.5rem;
    font-weight: bold;
  }
  span:nth-child(3) {
    color: var(--grey);
    font-size: 16px;
    line-height: 2;
    margin-top: 1rem;
  }
  button {
    width: 10rem;
    margin-top: 1.4rem;
  }
`;

export const BlackCircle = styled.div`
    position: absolute;
    height: 13rem;
    width: 13rem;
    border-radius: 100%;
    z-index: 1;
`;
