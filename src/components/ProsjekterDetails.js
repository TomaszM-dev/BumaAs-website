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
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      setIsActive(false);
      setIsOpened("");
      location("/prosjekter");
    }
  };

  return (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      <Container
        style={{
          background: `url(${image})`,
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
          <Imgs>
            <img src={image} alt="" />
            <img src={referancer} alt="" />
          </Imgs>
        </Content>
      </Container>
    </CardShadow>
  );
};

const Content = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: start;
  z-index: 1000;
`;

const Imgs = styled(motion.div)`
  /* background: white; */
  height: 80%;
  width: 40%;
  display: flex;
  border-radius: 10px;
  flex-direction: column;

  img {
    width: 80%;
    object-fit: cover;
    border-radius: 10px;
    height: 50%;
  }
`;

const About = styled(motion.div)`
  margin: 0rem 5rem;
  background: #ffffff97;
  height: 80%;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 8px;

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
  height: 80%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;

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
  }
`;

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  overflow: hidden;
  z-index: 10;
  top: 0;
  left: 0;
`;
export default ProsjekterDetails;
