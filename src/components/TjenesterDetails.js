import { motion } from "framer-motion";
import styled from "styled-components";
import Title from "./Title";

import FormFaq from "../pages/FormFaq";

const TjenesterDetails = ({
  title,
  headline1,
  headline2,
  headline3,
  headline4,
  headline5,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  imgD,
  imgD2,
}) => {
  return (
    <Container>
      <TitleContainer>
        <div>
          <Title title={title} />
        </div>
        <img src={imgD} alt="" />
      </TitleContainer>
      <Section>
        <h1>{headline1}</h1>
        <div>
          <img src={imgD2} alt="" />
          <p>{paragraph1}</p>
        </div>
      </Section>
      <Section2>
        <h1>{headline2}</h1>
        <p>{paragraph2}</p>
      </Section2>
      <Section>
        <h1>{headline3}</h1>
        <p>{paragraph3}</p>
      </Section>
      <Section>
        <h1>{headline4}</h1>
        <p>{paragraph4}</p>
      </Section>
      <Section>
        <h1>{headline5}</h1>
        <p>{paragraph5}</p>
      </Section>
      <FormFaq></FormFaq>
    </Container>
  );
};

const TitleContainer = styled(motion.div)`
  margin-top: 10rem;
  width: 100%;
  align-self: center;
  height: 10rem;
  display: flex;
  justify-content: center;
  position: relative;
  height: 40rem;

  img {
    position: absolute;
    width: 60rem;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div {
    width: 100%;
    z-index: 1;
  }
`;

const Section = styled(motion.div)`
  display: flex;
  margin-top: 5rem;
  color: black;
  width: 100%;
  flex-direction: column;
  padding: 1rem 5rem;

  h1 {
    font-size: 3rem;
    width: 60%;
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    margin-right: 4rem;
    width: 50%;
    height: 80%;
  }

  p {
    padding: 0rem;
    font-size: 1.4rem;
  }
`;

const Section2 = styled(Section)`
  h1 {
    margin-top: 3rem;
  }
  p {
  }
`;

const Container = styled(motion.div)`
  /* max-width: 100rem; */
  height: 100%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export default TjenesterDetails;
