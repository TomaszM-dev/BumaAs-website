import styled from "styled-components";
import { useState } from "react";
import Toggle from "./Toggle.js";
import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll.js";
import { scrollReveal, titleAnimation } from "../animations";
import FaqData from "../Data/FaqData.js";

const FaqSection = () => {
  const faqData = FaqData();

  const [element, controls] = useScroll();

  return (
    <Hide>
      <Faq
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>
          Any questions <span>FAQ</span>
        </h2>
        <LayoutGroup>
          {faqData.map((el) => {
            return (
              <Toggle title={el.title} key={el.title}>
                <motion.p
                  layout
                  animate={{ opacity: 1, translateY: 0 }}
                  initial={{ opacity: 0, translateY: -50 }}
                  exit={{ opacity: 0, translateY: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {el.answer}
                </motion.p>
              </Toggle>
            );
          })}
        </LayoutGroup>
      </Faq>
    </Hide>
  );
};

const Faq = styled(motion.div)`
  z-index: 1000;
  color: white;
  overflow: scroll;
  width: 36rem;
  height: 50rem;

  @media (max-width: 952px) {
    width: 50rem;
  }

  /* backface-visibility: hidden; */

  h2 {
    padding-bottom: 2rem;
    font-weight: 500;
  }

  .faq-line {
    backface-visibility: hidden;
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }

  .question {
    padding: 1.5rem 0rem;
    cursor: pointer;
    backface-visibility: hidden;
  }

  .answer {
    p {
      padding: 0;
    }
  }
`;
const Hide = styled.div`
  overflow: scroll;
  z-index: 100;
`;

export default FaqSection;
