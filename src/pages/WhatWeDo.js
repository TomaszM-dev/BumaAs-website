import Title from "../components/Title";
import Wave from "../components/Wave";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "../components/Card";

const WhatWeDo = function () {
  const title = "What we Do";

  return (
    <Container>
      <Headline>
        <Title title={title}></Title>
      </Headline>
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin-top: 5rem;
  width: 100%;
  height: 100vh;
  display: flex;

  flex-direction: column;
`;

const Headline = styled(motion.div)`
  align-self: center;
`;

const Cards = styled(motion.div)`
  /* max-width: 80rem; */

  margin: 10rem auto;
  display: flex;
`;

const Content = styled(motion.div)``;

export default WhatWeDo;
