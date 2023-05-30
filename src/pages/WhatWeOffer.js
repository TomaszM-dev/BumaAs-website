import Title from "../components/Title";
import Wave from "../components/Wave";
import { motion } from "framer-motion";
import styled from "styled-components";
import hero from "../img/utilities/buma-hero.avif";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const WhatWeOffer = () => {
  const [active, setActive] = useState("true");

  const title = "What We Offer";

  return (
    <Container id="tjenester">
      <TitleContainer>
        <Title title={title} />
      </TitleContainer>
      <Work>
        <Links>
          <button
            onClick={() => setActive(true)}
            className={active ? "active" : ""}
          >
            Outdoor Work
          </button>
          <button
            onClick={() => setActive(false)}
            className={!active ? "active" : ""}
          >
            Indoor Work
          </button>
        </Links>
        <Items>
          {active ? (
            <>
              <Item>
                <FontAwesomeIcon
                  icon={faStar}
                  className="icon"
                ></FontAwesomeIcon>
                <h3>Maling Innveliding</h3>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={faStar}
                  className="icon"
                ></FontAwesomeIcon>
                <h3>Maling Innveliding</h3>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={faStar}
                  className="icon"
                ></FontAwesomeIcon>
                <h3>Maling Innveliding</h3>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={faStar}
                  className="icon"
                ></FontAwesomeIcon>
                <h3>Maling Innveliding</h3>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={faStar}
                  className="icon"
                ></FontAwesomeIcon>
                <h3>Maling Innveliding</h3>
              </Item>
            </>
          ) : (
            ""
          )}
        </Items>
      </Work>
    </Container>
  );
};

const Work = styled(motion.div)`
  z-index: 1000;
  height: 37rem;
  width: 80rem;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #ffffff90;
`;

const Items = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 2rem 2rem;

  .icon {
    background: #ffffff;
    font-size: 5rem;
    padding: 2rem;
    opacity: 0.8;
  }

  h3 {
    margin-top: 1.3rem;
    text-align: center;
    font-size: 1.7rem;
  }
`;

const TitleContainer = styled(motion.div)`
  padding-top: 8rem;
  margin-bottom: 3rem;
`;

const Links = styled(motion.div)`
  display: flex;
  width: 55%;
  margin: 0 auto;

  button {
    margin-top: 3rem;
    width: 45%;
    border-radius: 0px;
    color: black;

    &.active {
      color: blue;
      border-bottom: 1px solid blue;
    }

    font-size: 1.8rem;
    background: transparent;
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  height: 90vh;
  clip-path: polygon(0 0, 100% 12%, 100% 100%, 0 88%);
  position: relative;
  object-fit: cover;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    opacity: 0.8;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${hero}) no-repeat;
    object-fit: cover;
    background-size: cover;
    background-position: center;
  }

  &:after {
    z-index: -1;
    box-shadow: inset 0px 3000px 4px rgba(59, 57, 154, 0.631);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default WhatWeOffer;
