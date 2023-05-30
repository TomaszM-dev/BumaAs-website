import Title from "../components/Title";
import Wave from "../components/Wave";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "../components/Card";
import CardData from "../Data/CardData";

const WhatWeDo = function () {
  const cardData = CardData();

  const title = "What we Do";

  return (
    <Container>
      <Wave />
      <Headline>
        <Title title={title}></Title>
      </Headline>
      <Cards>
        {cardData.map((el) => {
          return (
            <Card
              title={el.title}
              img={el.img}
              frontInfo={el.frontInfo}
              backInfo={el.backInfo}
            ></Card>
          );
        })}
      </Cards>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  margin-top: 5rem;
  width: 100%;
  height: 80vh;
  display: flex;

  flex-direction: column;
`;

const Headline = styled(motion.div)`
  align-self: center;
`;

const Cards = styled(motion.div)`
  /* max-width: 80rem; */

  margin: 5rem auto;
  display: flex;
`;

const Content = styled(motion.div)``;

export default WhatWeDo;
