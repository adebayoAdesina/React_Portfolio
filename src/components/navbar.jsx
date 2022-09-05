import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavLeft>
        <div>James</div>
        <span>toggle</span>
      </NavLeft>
      <NavRight>
        <div>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </NavRight>
    </Nav>
  );
};

const Nav = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 2rem;
  div {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

const NavRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-weight: 400;
  justify-content: center;
  div {
    flex: 10;
  }
  div > ul {
    display: flex;
    gap: 2rem;
    margin-right: 4rem;
  }
  div > ul > li {
    list-style: none;
  }
  div > ul > li:hover {
    cursor: pointer;
    color: var(--orange);
  }
  button {
      flex: 2
  }
`;

export default Navbar;
