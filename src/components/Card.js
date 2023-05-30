import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { useState } from "react";

const Card = ({ img, frontInfo, backInfo, title }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer>
      <CardInner className={flipped ? "flipped" : ""}>
        <CardFront onClick={() => setFlipped(true)}>
          <Img style={{ backgroundImage: `url(${img})` }}></Img>
          <Heading>
            <span>{title}</span>
          </Heading>

          <ul>
            {frontInfo.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>

          <button onClick={() => setFlipped(true)}>See More</button>
        </CardFront>
        <CardBack onClick={() => setFlipped(false)}>
          <h2>{title}</h2>
          {backInfo.map((el) => {
            return <p>{el}</p>;
          })}
          <button onClick={() => setFlipped(false)}>See Less</button>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

const Heading = styled(motion.div)`
  font-size: 1.9rem;

  text-transform: uppercase;
  position: absolute;
  top: 13.3rem;
  right: 0.3rem;
  text-align: right;
  width: 75%;

  span {
    color: white;
    font-weight: 500;
    padding: 0.5rem 1.2rem;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    background: #0d13d2b7;
  }
`;

const Img = styled(motion.div)`
  background-size: cover;
  height: 18rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

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

const CardContainer = styled(motion.div)`
  display: flex;
  align-items: center;

  justify-content: center;
  flex-direction: column;
  transition: all 1s;
  z-index: 10;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  margin: 0 1.9rem;
  transform-style: preserve-3d;

  &.flipped {
    z-index: 1;
  }
`;

const CardSlide = css`
  width: 100%;
  min-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0 0.2rem 1rem #49484898;

  border-radius: 5px;
`;

const CardFront = styled.div`
  ${CardSlide}
  z-index: 0;
  background: white;
  &.flipped {
    transform: rotateY(-180deg);
  }

  ul {
    margin-top: 2.5rem;
    align-self: center;

    li {
      color: black;
      font-size: 1.4rem;
      margin-bottom: 1rem;
      padding: 0.3rem 0;
      border-bottom: 1px solid #555454;
      text-align: center;
    }
  }
`;

const CardBack = styled.div`
  ${CardSlide}
  transform: rotateY(180deg) translate(100%,0);

  background: black;
  z-index: 1;

  &.flipped {
    transform: rotateY(0deg);
  }
  background-image: linear-gradient(to right bottom, #2012dd, #333);
  display: flex;

  h2 {
    padding: 2rem;
    margin-top: 3rem;
    text-transform: uppercase;

    color: white;
    font-size: 2.2rem;
    font-weight: 700;
  }
  p {
    padding: 0 2rem;
    color: white;
    font-size: 1.6rem;
  }
`;

const CardInner = styled.div`
  display: flex;
  flex: 1;
  transition: transform 1000ms;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(-180deg);
  }
`;

export default Card;
