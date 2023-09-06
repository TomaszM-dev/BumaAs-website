import logo from "../img/utilities/buma-logo-white.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoBlue from "../img/utilities/buma-logo-blue.png";

const Nav = () => {
  const [background, setBackground] = useState();
  const [activeBar, setActiveBar] = useState(false);

  const showBg = () => {
    if (window.scrollY >= 90) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  window.addEventListener("scroll", showBg);

  const scrollHandler = (el) => {
    el.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const closeHandler = () => {
    setActiveBar(false);
  };

  return (
    <>
      <nav>
        <Navbar className={background ? "bg-blue" : ""}>
          <div>
            <Links>
              <Link to="/omuss">Om Oss</Link>
              <Link to="/kontact-us">Contact Us</Link>
              <Link to="/referenser">Referenser</Link>
            </Links>

            <Link to="/#home">
              <img src={logo} alt="" />
            </Link>

            <Links>
              <Link to="/tjenester">Tjenester</Link>
              <Link to="/prosjekter">Prosjekter</Link>
              <Link to="/blogg">Blogg</Link>
            </Links>
          </div>
        </Navbar>

        {!activeBar && (
          <HamburgerNav>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <button onClick={() => setActiveBar(!activeBar)}>
              <Hamburger></Hamburger>
            </button>
          </HamburgerNav>
        )}
      </nav>
      {activeBar && (
        <MobileNav>
          <ul>
            <li>
              <Link to="/omuss">Om Oss</Link>
            </li>
            <li>
              <Link to="/kontact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/referenser">Referencer</Link>
            </li>
            <li>
              <Link to="/tjenester">Tjenester</Link>
            </li>
            <li>
              <Link to="/prosjekter">Prosjekter</Link>
            </li>
            <li>
              <Link to="/blogg">Blogg</Link>
            </li>
          </ul>
          <Link to="/">
            <img src={logoBlue} alt="" />
          </Link>
          <button onClick={closeHandler}>X</button>
        </MobileNav>
      )}
    </>
  );
};

const MobileNav = styled(motion.div)`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;

  img {
    width: 30rem;
    position: absolute;
    top: 17%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 400px) {
      width: 23rem;
      top: 13%;
    }
  }

  ul {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    display: flex;
    flex-direction: column;

    @media (max-width: 400px) {
      top: 50%;
      width: 100%;
    }
  }

  li {
    text-align: center;
    margin: 2rem;
    padding: 0.5rem 2rem;

    transition: all 1s;
    &:hover {
      transition: all 1s;
      color: blue;
    }
  }

  a {
    font-size: 3rem;
  }

  button {
    position: absolute;
    top: 0%;
    right: 5%;
    width: 10%;
    font-size: 3rem;
    color: black;
    background: inherit;
  }
`;
const Hamburger = styled(motion.div)`
  position: relative;
  width: 3.7rem;
  height: 0.2rem;
  background: white;

  &:before {
    position: absolute;
    content: "";
    top: 0.9rem;
    left: 0rem;
    width: 3.7rem;
    height: 0.2rem;
    background-color: white;
    // animation: $hue-animation;
  }
  &:after {
    position: absolute;
    content: "";
    top: -1rem;
    left: 0rem;
    width: 3.7rem;
    height: 0.2rem;
    background-color: white;
    // animation: $hue-animation;
  }
`;

const HamburgerNav = styled(motion.div)`
  padding: 1rem 7rem;
  height: 9rem;
  width: 100%;
  position: fixed;
  flex-grow: 0;
  top: 0;
  left: 0;
  z-index: 1000000;
  opacity: 0.9;
  transition: all 0.3s;
  background-color: #050572;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 400px) {
  }

  ul {
    display: flex;
    margin: 0 auto;
    max-width: 160rem;
    align-items: start;
    justify-content: space-between;

    @media (max-width: 400px) {
    }
  }

  img {
    width: 20rem;
  }

  button {
    width: 5%;
    margin: 0;
    background: none;
    padding: 2.5rem;

    @media (max-width: 400px) {
      margin-right: 4.4rem;
    }
  }

  @media (min-width: 952px) {
    display: none;
  }
`;

const Navbar = styled(motion.div)`
  padding: 1rem 5rem;
  height: 9rem;
  width: 100%;

  position: fixed;
  flex-grow: 0;
  top: 0;
  left: 0;
  z-index: 1000000;

  opacity: 0.9;
  transition: all 0.3s;
  background-color: #050572;
  &.bg-blue {
    background-color: #050572;
  }

  img {
    width: 17rem;
  }

  div {
    display: flex;
    margin: 0 auto;
    max-width: 160rem;
    align-items: start;
    justify-content: space-between;
  }

  @media (max-width: 952px) {
    display: none;
  }
`;

const Links = styled(motion.div)`
  color: white;
  list-style: none;
  display: flex;
  padding: 3rem 0;
  font-size: 1.5rem;
  font-weight: 500;

  a {
    color: white;
    text-decoration: none;
    padding: 0 1.5rem;
    transition: all 0.4s;
    font-size: 1.5rem;

    &:hover {
      color: #7d3b3b;
    }
  }
`;

export default Nav;
