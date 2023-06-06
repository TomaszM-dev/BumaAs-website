import Title from "../components/Title";
import Wave from "../components/Wave";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import TabDetail from "../components/TabDetail";
import TabData from "../Data/TabData";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "../components/useScroll";
import { scrollReveal, titleAnimation } from "../animations";

const WhatWeDo = function () {
  const [element, controls] = useScroll();
  const tabData = TabData();
  const [active, setIsActive] = useState([tabData[0]]);

  const title = "What we Do";

  const tabRef = useRef(null);

  const tabTitles = tabData.map((el) => {
    return [el.title];
  });

  const activeHandler = (e) => {
    tabData.forEach((el) => {
      if (el.title.toLocaleString() === e.target.textContent) {
        tabRef.current.style.top = el.top;

        setIsActive([el]);
      }
    });
  };

  return (
    <Container>
      <Wave />
      <Headline>
        <Title title={title}></Title>
      </Headline>
      <TabContainer>
        <TabNav>
          <ul>
            {tabTitles.map((el) => {
              return (
                <li
                  onClick={activeHandler}
                  className={
                    active[0].title === el.toLocaleString() ? "active" : ""
                  }
                >
                  {/* <FontAwesomeIcon icon={faUsers} className="icon" /> */}
                  {el}
                </li>
              );
            })}
          </ul>
        </TabNav>
        <TabIndicator ref={tabRef}></TabIndicator>
        <AnimatePresence>
          {active.map((el) => {
            return (
              <TabDetail
                title={el.title}
                icon={el.icon}
                information={el.information}
                key="box"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="box"
              />
            );
          })}
        </AnimatePresence>
      </TabContainer>
    </Container>
  );
};

const TabIndicator = styled(motion.div)`
  position: absolute;
  width: 0.4rem;
  height: 5.5rem;
  background: blue;
  color: white;
  top: 5.6rem;
  left: 23.3rem;
  border-radius: 10px;
  transition: all 1s;
`;
const TabNav = styled(motion.div)`
  flex: 0 0 30%;
  font-size: 1.8rem;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;

  border-right: 1px solid #000;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      width: 100%;
      margin-bottom: 2rem;
      margin-left: 5rem;
      cursor: pointer;
      padding: 1rem;

      .icon {
        margin-right: 0.5rem;
      }

      &.active {
        color: blue;
      }

      &:hover {
        color: blue;
      }
    }
  }
`;
const TabContainer = styled(motion.div)`
  width: 75%;
  position: relative;
  height: 40rem;
  background: #ffffff;
  margin: 0 auto;
  z-index: 1000;
  box-shadow: 0 0.2rem 3.8rem #bcbcbce6;
  border-radius: 2px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
const Container = styled(motion.div)`
  background: #fefefec7;
  position: relative;
  margin-bottom: -8rem;
  width: 100%;
  height: 100vh;
  display: flex;

  flex-direction: column;
`;

const Headline = styled(motion.div)`
  align-self: center;
  margin: 4rem;
`;

export default WhatWeDo;
