import Nav from "../components/Nav";
import { motion } from "framer-motion";
import styled from "styled-components";
import TjenesterData from "../Data/TjenesterData";
import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Tjenester = ({ active, setIsActive }) => {
  const tjenesterData = TjenesterData();
  console.log(active);

  // const [active, setIsActive] = useState([tjenesterData[0]]);

  const activeHandler = (e) => {
    console.log(e.target);
    const current = tjenesterData.filter(
      (el) => el.title === e.target.dataset.set
    );

    setIsActive(current);
  };
  return (
    <Page>
      <NavTop>
        <Nav className="nav" />
      </NavTop>

      <Container>
        <SideNav>
          <ul>
            {tjenesterData?.map((el) => {
              return (
                <Link to={`/tjenester/${el.url}`}>
                  <li
                    data-set={el.title}
                    key={el.title}
                    onClick={activeHandler}
                    className={
                      active[0]?.title === el.title.toLocaleString()
                        ? "active"
                        : ""
                    }
                  >
                    <img data-set={el.title} src={el.img} alt="" />
                    <p data-set={el.title}>{el.title}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </SideNav>
        <Content>
          {active?.map((el) => {
            return (
              <div>
                <h3>{el.title}</h3>
              </div>
            );
          })}
        </Content>
      </Container>
    </Page>
  );
};

const Content = styled(motion.div)`
  flex: 1;
`;

const SideNav = styled(motion.div)`
  flex: 0 0 25%;

  background: white;
  display: flex;
  box-shadow: 0 0 1.4rem #d5d3d3;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 2rem;
    width: 2.5rem;
    align-self: center;
    position: relative;
  }

  li {
    padding-left: 3rem;
    display: flex;
    cursor: pointer;

    p {
      font-size: 1.3rem;
      font-weight: 00;
      padding: 1.4rem;
      position: relative;
    }

    &:hover {
      background: #ebebeb;
    }

    &.active {
      color: blue;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
  }
`;
const NavTop = styled(motion.div)`
  width: 100%;
  height: 9.1rem;
`;
const Container = styled(motion.div)`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 90%;
  /* background: #e3e3e3; */
`;

const Page = styled(motion.div)`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export default Tjenester;
