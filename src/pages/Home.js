import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import hero from "../img/buma-hero.avif";

const Home = () => {
  return (
    <HomeStyle id="home">
      <Hero>
        <Content>
          <h1>
            Vi realiserer ditt prosjekt til <span>avtalt pris</span> og tid.
          </h1>
          <h2>Velg oss og vi far jobben gjort!</h2>
        </Content>
        <Reviews>
          <Stars>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </Stars>
          <Score>
            <p>4.9/5.0 50+</p>
            <p>reviews</p>
          </Score>
        </Reviews>
      </Hero>
      <ContactUs>
        <h3>Contact Us</h3>
      </ContactUs>
    </HomeStyle>
  );
};

export default Home;

const Hero = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 90vh;
  clip-path: polygon(0 0, 100% 0%, 100% 99%, 0 88%);
  position: relative;
  object-fit: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    opacity: 0.8;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${hero}) no-repeat;
    object-fit: cover;
    background-size: cover;
    background-position: center;
  }

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

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  height: 100%;
  width: 50%;
  margin: 0 auto;

  h1 {
    margin-bottom: 3rem;
    z-index: 11;
    font-size: 3.4rem;
    color: white;
    margin-top: 10rem;
    font-weight: 600;
    text-align: start;
  }

  h2 {
    text-align: start;
    font-size: 3.1rem;
    z-index: 11;
    font-weight: 400;
    color: white;
  }
`;

const Reviews = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  z-index: 12;
  margin-right: 2rem;

  color: white;
  padding: 4rem;
  font-size: 1.4rem;

  p {
    padding: 0;
  }
`;

const Stars = styled(motion.div)`
  font-size: 1.8rem;
  color: gold;
`;

const Score = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.8rem;

  p {
    font-size: 1.8rem;

    font-weight: 700;
    padding-right: 0.2rem;
  }
`;

const HomeStyle = styled(motion.div)`
  width: 100%;
  height: 90vh;
  position: relative;
  text-align: end;
`;

const ContactUs = styled(motion.div)`
  position: fixed;
  bottom: -3rem;
  right: 0;

  z-index: 11;
  color: black;
  padding: 1.3rem 2.4rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  background: blue;
  display: inline-block;
  color: white;
  margin-right: 4rem;
  margin-bottom: 6rem;
`;
