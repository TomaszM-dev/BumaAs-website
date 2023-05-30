import logo from "../img/buma-logo-white.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const NaviPage = () => {
  return (
    <>
      <Navbar>
        <Links>
          <Link to="/omuss">Om Oss</Link>

          <Link to="/">
            <HashLink to="/#contact" smooth>
              Contact Us
            </HashLink>
          </Link>
          <Link to="/" smooth>
            <HashLink to="/#referenser" smooth>
              Referenser
            </HashLink>
          </Link>
        </Links>
        <Link to="/" smooth>
          <HashLink to="/#home" smooth>
            <img src={logo} alt="" />
          </HashLink>
        </Link>

        <Links>
          <Link to="/" smooth>
            <HashLink to="/#tjenester" smooth>
              Tjenester
            </HashLink>
          </Link>
          <Link to="/prosjekter">Prosjekter</Link>
          <Link to="/blogg">Blogg</Link>
        </Links>
      </Navbar>
    </>
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

  li {
  }

  a {
    color: white;
    text-decoration: none;
    margin-left: 1.3rem;
    transition: all 0.4s;
    font-size: 1.5rem;

    &:hover {
      color: #7d3b3b;
    }
  }
`;

export default NaviPage;
