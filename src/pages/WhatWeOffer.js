import Title from "../components/Title";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import hero from "../img/utilities/buma-hero.avif";
import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import { TjenesterData } from "../Data/TjenesterData";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const WhatWeOffer = ({ setIsActive, active }) => {
  const workData = TjenesterData();
  const [filtered, setFiltered] = useState(TjenesterData());
  const [activeCategory, setActiveCategory] = useState("outdoor");

  const ref = useRef(null);
  const title = "What We Offer";

  const linkHandler = (e) => {
    const cur = filtered.filter((el) => el.img === e.target.src);

    // loc(`/tjenester/${cur[0]?.url}`);
    setIsActive(cur);
  };

  // console.log(currentItem[0]);

  return (
    <Container id="tjenester">
      <TitleContainer>
        <Title title={title} />
      </TitleContainer>
      <Work>
        <Filter
          workData={workData}
          setFiltered={setFiltered}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <Items
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {filtered.map((el) => {
              return (
                <Link
                  to={`tjenester/${el.url}`}
                  layout
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  key={el.title}
                >
                  <Item
                    onClick={linkHandler}
                    ref={ref}
                    layout
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    key={el.title}
                  >
                    <img src={el.img} alt="" />

                    <h3>{el.title}</h3>
                  </Item>
                </Link>
              );
            })}
          </AnimatePresence>
        </Items>
      </Work>
    </Container>
  );
};

const Work = styled(motion.div)`
  z-index: 1000;
  transition: all 1s;
  height: 51rem;
  width: 80rem;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #ffffff90;
  overflow: hidden;
`;

const Items = styled(motion.div)`
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;
const Item = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 2rem 2rem;
  padding-top: 1rem;

  overflow: hidden;

  img {
    background: #ffffff;
    font-size: 5rem;
    padding: 2rem;
    border-radius: 1rem;
    opacity: 0.8;
    width: 10rem;
    /* object-fit: cover; */
    transition: all 1s;
  }

  h3 {
    margin-top: 1.3rem;
    text-align: center;
    font-size: 1.7rem;
    transition: all 1s;
  }

  &:hover {
    img {
      transition: all 1s;
      transform: translateY(-0.1rem) scale(1.1);
    }

    h3 {
      color: blue;
      transition: all 1s;
      transform: translateY(-0.1rem);
    }
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
  height: 110vh;
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
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
