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
  background: #050572;
  padding: 1rem 5rem;
  height: 9rem;
  width: 100%;
  position: fixed;
  /* clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 70%); */
  top: 0;
  left: 0;
  z-index: 1000000;
  display: flex;
  align-items: start;
  justify-content: space-between;
  opacity: 0.9;
  img {
    margin-left: 7rem;
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

  li {
    margin-left: 3rem;
  }
`;

export default Nav;
