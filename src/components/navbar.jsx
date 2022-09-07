import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <Nav id="Navbar">
      <NavLeft>
        <div>James</div>
        <Toggle />
      </NavLeft>
      <NavRight>
        <div>
          <ul>
            <Link
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
              spy={true}
            >
              <li>Home</li>
            </Link>
            <Link
              to="Services"
              smooth={true}
              activeClass="activeClass"
              spy={true}
            >
              <li>Services</li>
            </Link>
            <Link
              to="Experience"
              smooth={true}
              activeClass="activeClass"
              spy={true}
            >
              <li>Experience</li>
            </Link>
            <Link
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
              spy={true}
            >
              <li>Portfolio</li>
            </Link>
            <Link
              to="Testimonial"
              smooth={true}
              activeClass="activeClass"
              spy={true}
            >
              <li>Testimonials</li>
            </Link>
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
    @media screen and (max-width: 480px) {
      display: none;
    }
  }
  div > ul > a > li {
    list-style: none;
  }
  div > ul > a > li:hover {
    cursor: pointer;
    color: var(--orange);
  }
  button {
    flex: 2;
    @media screen and (max-width: 480px) {
      display: none;
    }
  }
`;

export default Navbar;
