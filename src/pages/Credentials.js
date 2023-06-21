import Title from "../components/Title";

import styled from "styled-components";

import WaveOpinions from "../components/WaveOpinions";

import CredentialsDetails from "../components/CredentialsDetails";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import Swipe from "../components/Swipe";

import { useState } from "react";
const Credentials = () => {
  const title = "Opinions";

  const [active, setIsActive] = useState(false);
  const [opened, setIsOpened] = useState("");

  return (
    <Container id="referenser">
      <WaveOpinions />
      <TitleContainer>
        ``
        <Title title={title} />
        <h4>
          These are people how trusted us and were <span> really happy</span>{" "}
          about that
        </h4>
      </TitleContainer>
      <Opinions
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <Swipe
          setIsActive={setIsActive}
          active={active}
          opened={opened}
          setIsOpened={setIsOpened}
        ></Swipe>
        <AnimatePresence>
          {active === true && (
            <CredentialsDetails
              layout
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              opened={opened}
              setIsOpened={setIsOpened}
              setIsActive={setIsActive}
            />
          )}
        </AnimatePresence>
      </Opinions>
    </Container>
  );
};

const Opinions = styled(motion.div)`
  height: 40rem;
  margin-top: 7rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
  }
`;

const Opinion = styled(motion.div)`
  img {
    padding: 2rem;
    width: 30rem;
    height: 40rem;
  }
`;

const Container = styled(motion.div)`
  position: relative;
  margin-top: 1rem;
  width: 100%;
  height: 90rem;
`;

const TitleContainer = styled(motion.div)`
  width: 50%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    text-align: center;
    font-size: 2.5rem;
    margin-top: 3rem;
  }
`;

export default Credentials;
