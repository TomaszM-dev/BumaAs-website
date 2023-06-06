import logo from "../img/utilities/buma-logo-white.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [background, setBackground] = useState();

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

  return (
    <>
      <Navbar className={background ? "bg-blue" : ""}>
        <Links>
          <Link to="/omuss">Om Oss</Link>
          <Link to="/contactus">Contact Us</Link>
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
      </Navbar>
    </>
  );
};

const Navbar = styled(motion.div)`
  padding: 1rem 5rem;
  height: 9rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  display: flex;
  align-items: start;
  justify-content: space-between;
  opacity: 0.9;
  transition: all 0.3s;
  background-color: #050572;
  &.bg-blue {
    background-color: #050572;
  }

  img {
    /* margin-left: 7rem; */
    width: 17rem;
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
