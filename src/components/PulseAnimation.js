import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Keyframes } from "framer-motion";

const PulseAnimation = () => {
  return (
    <Pulse>
      <FontAwesomeIcon icon={faCirclePlay} className="icon"></FontAwesomeIcon>
    </Pulse>
  );
};

const pulse = keyframes`
 
  0% {
    transform: scale(0.9);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.9);
  }
`;

const pulseFade = keyframes`

  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 10px rgba(0, 84, 230, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(234, 101, 101, 0);
  }

  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(234, 101, 101, 0);
  }
`;

const Pulse = styled(motion.div)`
  border-radius: 10px;
  position: relative;
  z-index: 10;

  &::before {
    z-index: 10;
    content: "";
    position: relative;
    display: block;
    background-color: #0235cf;
    border-radius: 20px;
    height: 70px;
    width: 70px;
    transform: scale(1);
    animation-name: ${pulseFade};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 2.8rem;
    color: white;
    z-index: 1000;
  }
`;

export default PulseAnimation;
