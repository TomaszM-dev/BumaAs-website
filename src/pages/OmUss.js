import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnimation, fade, photoAnim } from "../animations";
import Wave from "../components/WaveContact";
import Nav from "../components/Nav";
import image from "../img/utilities/buma-hero.avif";
import PulseAnimation from "../components/PulseAnimation";
import { useState } from "react";
import hero from "../img/utilities/buma-hero.avif";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";

const OmUss = () => {
  const [active, setIsActive] = useState("false");

  const activeHandler = (e) => {
    setIsActive(true);
  };

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      setIsActive(false);
    } else {
    }
  };

  return (
    <>
      <NavTop>
        <Nav />
      </NavTop>
      <About>
        <Description>
          <motion.div>
            <Hide>
              <motion.h2 variants={titleAnimation}>
                Buma tilbyr <span> profesjonelle tjenester </span>{" "}
              </motion.h2>
            </Hide>

            <Hide>
              <motion.h2 variants={titleAnimation} c z>
                innen maling og oppussing.
              </motion.h2>
            </Hide>
          </motion.div>
          <motion.p variants={fade}>
            Vi har 17 års erfaring i bransjen. Våre tjenester tilbys borettslag
            i hele Viken. Du kan stole på oss.
          </motion.p>
          <motion.button variants={fade}>See More</motion.button>
        </Description>
        <Image variants={fade}>
          <motion.img variants={photoAnim} src={image} alt="" />
          <motion.div onClick={activeHandler} variants={fade}>
            <PulseAnimation />
          </motion.div>
        </Image>
        <Wave />
        {active === true ? (
          <CardShadow
            className="shadow"
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onClick={exitDetailHandler}
          >
            <Container></Container>
          </CardShadow>
        ) : null}
      </About>
      <Hero>
        <div>
          <h1>Omfanget av arbeidene</h1>
          <p>
            Valhallveien -det <span>historiske boligfeltet</span> trengte en
            grundig oppussing. Fasaden ble nøyaktig vasket og deretter grundig
            kontrollert av en snekker.
          </p>
          <p>
            Svært mange bord måtte skiftes ut. Alt løs maling ble fjernet og
            deretter ble underlaget grunnet. Vi brukte Jotun Drygolin Nordic
            Extreme til maling.
          </p>
        </div>
        <div>
          <h1>Omfanget av arbeidene</h1>
          <p>
            Vår styrke- Har dere innspill til hvordan klima- og
            miljøpåvirkningen av tjenester kan forbedres hos Buma AS?Send
            forslag til post@buma.no
          </p>
          <ul>
            <li>
              <span>1.</span> Fast pris
            </li>
            <li>
              <span>2.</span> Ingen underleverandorer
            </li>
            <li>
              <span>3.</span> Punktilgher
            </li>
            <li>
              <span>4.</span> Samarabeid med ledende prosenter
            </li>
          </ul>
        </div>
      </Hero>
      <ImageGallery />

      <Footer />
    </>
  );
};

const FooterStyle = styled(motion.div)`
  margin-top: -5rem;
`;

const Hero = styled(motion.div)`
  margin-top: 7rem;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  clip-path: polygon(0 0, 100% 10%, 100% 99%, 0 90%);
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

  div {
    margin: 2rem;
    padding: 3rem;
    max-width: 37rem;
    /* width: 35%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;

    height: 38rem;
    background: #ffffffba;
    z-index: 100;
    color: black;

    h1 {
      margin-bottom: 2rem;
      color: blue;
      font-size: 2.2rem;
    }

    p {
      font-size: 1.6rem;
    }

    ul {
      width: 100%;
      li {
        font-size: 1.6rem;
      }
    }
  }
`;

const Container = styled(motion.div)`
  width: 70%;
  height: 60%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  background: black;
  left: 50%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  z-index: 1000;
  transform: translate(-50%, -45%);
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

const NavTop = styled(motion.div)`
  width: 100%;
  height: 9.1rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const About = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 8rem;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

const Description = styled.div`
  flex: 0 0 57%;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: 400;
    color: black;
  }

  p {
    font-size: 1.4rem;
    color: black;
  }

  button {
    width: 30%;
  }

  @media (max-width: 1300px) {
    padding: 2rem 0;
  }
`;

const Image = styled(motion.div)`
  position: relative;
  overflow: hidden;
  z-index: 2;
  height: 70vh;
  border-radius: 10px;
  box-shadow: 0 0 1.4rem #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OmUss;
