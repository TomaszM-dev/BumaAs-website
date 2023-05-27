import bluePaint from "../img/blue-paint.png";
import { motion } from "framer-motion";
import styled from "styled-components";

const Title = function ({ title }) {
  return (
    <Headline>
      <img src={bluePaint} alt="" />
      <h3>{title}</h3>
    </Headline>
  );
};

const Headline = styled(motion.div)`
  position: relative;
  display: inline-block;
  z-index: 1000;

  img {
    width: 25rem;
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export default Title;
