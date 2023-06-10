import bluePaint from "../img/utilities/blue-paint.png";
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
  max-height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  img {
    max-width: 34rem;
    max-height: 10rem;
  }

  h3 {
    position: absolute;
    top: 50%;
    /* padding: 0 3rem; */
    /* width: 100%; */
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export default Title;
