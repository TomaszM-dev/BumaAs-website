import CredentialsData from "../Data/CredentialsData";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RefDetails = ({ active, opened, setIsActive, setIsOpened }) => {
  const location = useNavigate();

  const image = opened[0];

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      setIsActive(false);
      setIsOpened("");
      location("/referenser");
    } else {
    }
  };
  return (
    <CardShadow
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="shadow"
      onClick={exitDetailHandler}
    >
      <img src={image.image} alt="" />
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  overflow: hidden;
  z-index: 10;
  top: 0;
  left: 0;

  img {
    border-radius: 10px;
    position: absolute;
    transform: translate(-50%, -45%);
    margin: 0 auto;
    width: 50rem;
    height: 60rem;

    top: 50%;
    left: 50%;
    z-index: 100090;
  }
`;
export default RefDetails;
