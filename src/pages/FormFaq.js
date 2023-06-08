import { motion } from "framer-motion";
import styled from "styled-components";
import logoBlue from "../img/utilities/buma-logo-blue.png";
import hero from "../img/utilities/buma-hero.avif";
import Form from "../components/Form";
import FaqSection from "../components/FaqSection";

const FormFaq = () => {
  return (
    <Bg>
      <Container>
        <Form />
        <FaqSection />
      </Container>
    </Bg>
  );
};

const Bg = styled(motion.div)`
  height: 105vh;

  position: relative;
  object-fit: cover;

  &:before {
    content: "";
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
    box-shadow: inset 0px 3000px 4px rgba(59, 57, 154, 0.631);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled(motion.div)`
  backface-visibility: hidden;
  display: flex;
  height: 75%;
  width: 80%;
  margin: auto;
  padding-top: 10rem;

  justify-content: space-between;
`;

export default FormFaq;
