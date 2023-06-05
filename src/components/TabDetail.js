import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import { LayoutGroup } from "framer-motion";
const TabDetail = ({ title, icon, information }) => {
  return (
    <Container
      key="box"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <FontAwesomeIcon icon={faUsers} layout className="icon" />
      <motion.h3 layout>{title}</motion.h3>
      <motion.p layout>{information}</motion.p>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  padding: 2rem 4rem;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 5rem;
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 2.7rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 2rem;
  }
`;

export default TabDetail;
