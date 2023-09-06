import { motion } from "framer-motion";
import styled from "styled-components";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const BlogDetails = ({
  img,
  title,
  setIsOpened,
  setIsActive,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraphS1,
  paragraphS2,
  paragraphS3,
  paragraphS4,
  paragraphS5,
  opened,
  headline1,
  headline2,
  headline3,
  headline4,
  headline5,
  contact,
}) => {
  const location = useNavigate();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      setIsActive(false);
      setIsOpened("");
      location("/blogg");
    }
  };

  return (
    <CardShadow
      className="shadow"
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={exitDetailHandler}
    >
      <Container>
        <h1>{title}</h1>
        <img src={img} alt="" />

        <Section>
          <h1>{headline1}</h1>
          <p>{paragraph1}</p>
          {opened?.map((el) => {
            if (el.paragraphS1 !== undefined) {
              return (
                <ul>
                  <li>{paragraphS1}</li>
                  <li>{paragraphS2}</li>
                  <li>{paragraphS3}</li>
                  <li>{paragraphS4}</li>
                  <li>{paragraphS5}</li>
                </ul>
              );
            }
          })}
        </Section>
        <Section>
          <h1>{headline2}</h1>
          <p>{paragraph2}</p>
        </Section>
        <Section>
          <h1>{headline3}</h1>
          <p>{paragraph3}</p>
        </Section>
        <Section>
          <h1>{headline4}</h1>
          <p>{paragraph4}</p>
        </Section>
        <Section>
          <h1>{headline5}</h1>
          <p>{paragraph5}</p>
        </Section>
        <Section>
          <p>{contact}</p>
        </Section>
      </Container>
    </CardShadow>
  );
};

const Section = styled(motion.div)`
  display: flex;
  margin-top: 5rem;
  color: black;
  width: 100%;
  flex-direction: column;
  padding: 1rem 5rem;

  @media (max-width: 482px) {
    padding: 1rem;
  }

  ul {
    font-size: 1.7rem;

    li {
      padding: 2rem;
      margin: 2rem;
      border-radius: 3rem;
      text-align: center;
      border-bottom: 1px solid blue;
    }
  }

  h1 {
    font-size: 3rem;
    text-align: start;
    width: 60%;
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
  }

  p {
    padding: 0rem;
    font-size: 1.4rem;
  }
`;

const Container = styled(motion.div)`
  width: 70%;
  height: 90%;
  margin: 0 auto;
  position: absolute;
  top: 55%;
  left: 50%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  padding: 3rem;
  z-index: 10;
  transform: translate(-50%, -45%);
  background: white;

  @media (max-width: 482px) {
    width: 85%;
  }
  h1 {
    margin: 2rem 0;
    width: 70%;
    align-self: center;
    text-align: center;
    font-size: 2.4rem;
  }

  img {
    margin: 2rem 0;
    width: 60rem;
    height: 40rem;

    align-self: center;

    @media (max-width: 400px) {
      width: 95%;
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

export default BlogDetails;
