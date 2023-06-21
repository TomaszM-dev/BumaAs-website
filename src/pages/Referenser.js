import Nav from "../components/Nav";
import { motion } from "framer-motion";
import styled from "styled-components";
import hero from "../img/utilities/buma-hero.avif";
import client from "../img/utilities/client.png";
import CredentialsData from "../Data/CredentialsData";
import Footer from "../components/Footer";
import { useState } from "react";

import { Link } from "react-router-dom";
import RefDetails from "../components/RefDetails";

const Referencer = () => {
  const credentialsData = CredentialsData();
  const [active, setIsActive] = useState(false);
  const [opened, setIsOpened] = useState("");

  const activeHandler = (e) => {
    const current = credentialsData.filter(
      (el) => el.url === e.target.dataset.set
    );

    setIsOpened(current);
    setIsActive(true);
  };

  return (
    <>
      <NavTop>
        <Nav />
      </NavTop>
      <Container>
        <ContentTop>
          <img src={hero} alt="" />
          <h1>Refernser</h1>
        </ContentTop>
        <ContentBottom>
          <TextContainer>
            <p>
              <span>Buma består av gode fagfolk, vi</span> vet hva vi gjør, vi
              jobber med de beste og med beste materialer og har mange års
              erfaring i oppussingsbransjen.
            </p>
            <p>
              Den beste reklamen er imidlertid meningene til fornøyde kunder.
              Les tilbakemeldinger fra eiendomsforvaltere som vi hadde gleden av
              å samarbeide med. Se anbefalinger fra våre kunder.
            </p>
            <button>See More</button>
          </TextContainer>
          <ImageContainer>
            <img src={client} alt="" />
          </ImageContainer>
        </ContentBottom>
        <Credentials>
          {credentialsData.map((el) => {
            return (
              <Link to={`/referenser${el.url}`} key={el.url}>
                <div onClick={activeHandler} data-set={el.url}>
                  <img
                    onClick={activeHandler}
                    data-set={el.url}
                    src={el.image}
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </Credentials>
        {active &&
          opened?.map((el) => {
            return (
              <RefDetails
                key={el.url}
                opened={opened}
                setIsOpened={setIsOpened}
                active={active}
                setIsActive={setIsActive}
              />
            );
          })}
      </Container>
      <Footer />
    </>
  );
};

const Credentials = styled(motion.div)`
  width: 90rem;
  margin: 2rem auto;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  @media (max-width: 952px) {
    width: 60rem;
  }

  div {
    overflow: hidden;
    width: 27rem;
    height: 30rem;
    margin: 0.7rem 0.7rem;
    box-shadow: 0 0 0.8rem #cdcccc;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 1s;
      object-fit: cover;
      display: block;
      overflow: hidden;
      transition: all 1s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  div {
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 0 0 50%;
  img {
    margin-left: 5rem;
    width: 100%;
    border-bottom: 4px solid #000;
  }
`;
const TextContainer = styled(motion.div)`
  flex: 0 0 40%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 952px) {
    margin-bottom: 8rem;
  }

  p {
    padding: 1rem;
    font-size: 1.7rem;
  }

  button {
    margin-top: 2rem;
    width: 40%;
  }
`;

const NavTop = styled(motion.div)`
  width: 100%;
`;

const ContentBottom = styled(motion.div)`
  /* width: 100%; */
  max-width: 100rem;
  margin: 5rem auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 952px) {
    flex-direction: column;
    width: 60%;
  }
`;

const ContentTop = styled(motion.div)`
  height: 45vh;

  width: 100%;
  height: 100%;
  position: relative;

  img {
    height: 45vh;
    display: block;
    object-fit: cover;
    width: 100%;
    position: relative;
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

  h1 {
    text-transform: uppercase;
    position: absolute;
    bottom: 3rem;
    left: 45%;
    font-size: 2.7rem;
    color: white;
    z-index: 10;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 15rem;
  /* width: 100%; */
  /* height: 100vh; */
`;

export default Referencer;
