import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Content
      className="question"
      onClick={() => setToggle(!toggle)}
      animate={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: -50 }}
      exit={{ opacity: 0, translateY: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4 layout>{title}</motion.h4>
      <motion.div layout className="faq-line"></motion.div>
      {toggle ? children : ""}
    </Content>
  );
};

const Content = styled(motion.div)`
  p {
    margin-top: -1.7rem;
  }
`;

export default Toggle;
