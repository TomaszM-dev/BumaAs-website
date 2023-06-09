import Title from "../components/Title";
import Wave from "../components/Wave";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import TabDetail from "../components/TabDetail";
import TabData from "../Data/TabData";
import { useState, useEffect, useRef } from "react";

import { useScroll } from "../components/useScroll";
import { scrollReveal, titleAnimation } from "../animations";

const WhatWeDo = function() {
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
      <Hide>
        <TabContainer
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <TabNav>
            <ul>
              {tabTitles.map((el) => {
                return (
                  <li
                    key={el.title}
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
              <TabIndicator ref={tabRef}></TabIndicator>
            </ul>
          </TabNav>

          {active.map((el) => {
            return (
              <TabDetail
                layout
                title={el.title}
                icon={el.icon}
                information={el.information}
                key={el.title}
                className="box"
              />
            );
          })}
        </TabContainer>
      </Hide>
    </Container>
  );
};

const Hide = styled(motion.div)`
  /* overflow: hidden; */
  z-index: 10;
`;

const TabIndicator = styled(motion.div)`
  position: absolute;
  width: 0.4rem;
  height: 5.5rem;
  background: blue;
  color: white;
  top: 1.5rem;
  right: 0;
  border-radius: 10px;
  transition: all 1s;

  @media (max-width: 752px) {
    display: none;
  }
`;
const TabNav = styled(motion.div)`
  flex: 0 0 30%;
  position: relative;
  font-size: 1.8rem;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;

  border-right: 1px solid #000;

  @media (max-width: 752px) {
    border: none;
    padding-right: 0rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 752px) {
      flex-direction: row;
      margin: 1rem 1.5rem;
      flex-wrap: wrap;
    }

    li {
      width: 100%;
      margin-bottom: 2rem;
      margin-left: 5rem;
      cursor: pointer;
      padding: 1rem;

      @media (max-width: 752px) {
        margin-left: 0;
        text-align: center;
      }

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

  box-shadow: 0 0.2rem 3.8rem #bcbcbce6;
  border-radius: 2px;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  @media (max-width: 952px) {
    width: 85%;
  }

  @media (max-width: 752px) {
    flex-direction: column;
    height: 70rem;
    width: 90%;
  }

  @media (max-width: 500px) {
    height: 70rem;
  }
`;
const Container = styled(motion.div)`
  background: #fefefec7;
  position: relative;
  margin-bottom: -8rem;
  width: 100%;
  height: 80rem;
  display: flex;

  flex-direction: column;

  @media (max-width: 752px) {
    height: 100rem;
  }
`;

const Headline = styled(motion.div)`
  align-self: center;
  margin: 4rem;
`;

export default WhatWeDo;
