import { motion } from "framer-motion";
import styled from "styled-components";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const ProsjekterDetails = ({
  title,
  setIsOpened,
  setIsActive,
  image,
  paragraph,
  opened,
  referancer,
  about,
  paragraph1,
}) => {
  const location = useNavigate();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow2")) {
      document.body.style.overflow = "auto";
      setIsActive(false);
      setIsOpened("");
      location("/prosjekter");
    } else {
    }
  };

  return (
    <CardShadow
      className="shadow2"
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={exitDetailHandler}
    >
      <Container
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <TitleContainer>
          <h1>
            <Title title={title} />
          </h1>
        </TitleContainer>
        <Content>
          <About>
            <h4>{about}</h4>
            <p>{paragraph}</p>
            <p>{paragraph1}</p>
          </About>
        </Content>
      </Container>
    </CardShadow>
  );
};

const Content = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  /* overflow: scroll; */

  width: 100%;
  justify-content: space-around;
  align-items: start;
  z-index: 1000;

  @media (max-width: 952px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const About = styled(motion.div)`
  margin: 5rem 5rem;
  background: #ffffff97;
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 8px;

  @media (max-width: 952px) {
    width: 80%;
    height: 100%;
  }

  h4 {
    color: blue;
    text-align: center;
    margin: 2rem 0;
  }

  p {
    color: black;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 2rem 1rem;
  }
`;

const TitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    margin-top: 3rem;
  }
`;
const Container = styled(motion.div)`
  width: 80%;
  height: 65%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  z-index: 1000;
  transform: translate(-50%, -45%);

  &:before {
    content: "";
    background: #0e0e927c;

    position: absolute;
    top: 0;
    left: 0rem;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    transition: all 1s;

    @media (max-width: 952px) {
      height: 100%;
    }
  }
`;

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  overflow: scroll;
  z-index: 10;
  top: 0;
  z-index: 1000;
  left: 0;
`;
export default ProsjekterDetails;
