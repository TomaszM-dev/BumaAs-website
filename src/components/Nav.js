import logo from "../img/buma-logo-white.png";
import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navbar>
      <img src={logo} alt="" />

      <Links>
        <li>Om Oss</li>
        <li>Contact Us</li>
        <li>Tjenester</li>
        <li>Prosjekter</li>
        <li>Credentials</li>
      </Links>
    </Navbar>
  );
};

const Navbar = styled(motion.div)`
  background: transparent;
  padding: 2rem 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 17rem;
  }
`;

const Links = styled(motion.div)`
  color: white;
  list-style: none;
  display: flex;
  font-size: 1.5rem;
  font-weight: 500;

  li {
    margin-left: 3rem;
  }
`;

export default Nav;
