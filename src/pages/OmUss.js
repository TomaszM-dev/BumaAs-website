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

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import ImageGalleryData from "../Data/ImageGalleryData";

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

  const imageData = ImageGalleryData();
  const title = "Image Gallery";
  const location = useNavigate();

  const [activePhoto, setIsActivePhoto] = useState(false);
  const [opened, setIsOpened] = useState("");

  const activePhotoHandler = (e) => {
    setIsActivePhoto(true);
    console.log(e.target.dataset.set);
    console.log(active);

    const current = imageData.filter((el) => el.id === +e.target.dataset.set);
    console.log(current);
    setIsOpened(current);
  };

  const exitPhotoHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow2")) {
      document.body.style.overflow = "auto";
      setIsActivePhoto(false);
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
              <motion.h2 variants={titleAnimation}>
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
      <ContainerPhoto>
        <TitleContainer>
          <Title title={title} />
        </TitleContainer>
        <Pictures>
          {imageData.map((el, index) => {
            return (
              <Picture
                onClick={activePhotoHandler}
                key={index}
                className={`image${el.id} `}
                data-set={el.id}
              >
                <img data-set={el.id} src={el.img} alt="" />
              </Picture>
            );
          })}
          {activePhoto &&
            opened?.map((el) => {
              return (
                <CardShadowPhoto className="shadow2" onClick={exitPhotoHandler}>
                  <img src={el.img} alt="" />
                </CardShadowPhoto>
              );
            })}
        </Pictures>
      </ContainerPhoto>

      <Footer />
    </>
  );
};

const Hero = styled(motion.div)`
  margin-top: 7rem;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 70rem;
  clip-path: polygon(0 0, 100% 10%, 100% 99%, 0 90%);
  position: relative;
  object-fit: cover;

  @media (max-width: 952px) {
    height: 100rem;
  }

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

  @media (max-width: 952px) {
    flex-direction: column;
    margin: 5rem 0;
  }

  div {
    @media (max-width: 952px) {
      margin: 2rem;
      max-width: 50rem;
    }

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
const CardShadowPhoto = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  overflow: scroll;
  z-index: 10;
  top: 0;
  z-index: 1000;
  left: 0;

  img {
    position: absolute;
    top: 55%;
    left: 50%;
    height: 50rem;
    width: 70rem;

    transform: translate(-50%, -50%);
  }
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
  height: 70rem;
  border-radius: 10px;
  box-shadow: 0 0 1.4rem #000;

  @media (max-width: 952px) {
    margin: 10rem;
  }

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

const TitleContainer = styled(motion.div)`
  align-self: center;
  margin: 4rem;
`;

const Picture = styled(motion.div)`
  cursor: pointer;
  position: relative;
  box-shadow: 0 0.3rem 0.9rem #7e7e7e;
  border-radius: 5px;
  transition: all 1s;
  height: 28rem;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
    transition: all 1s;
  }

  &:hover img {
    transform: scale(1.3);
  }
`;

const Pictures = styled(motion.div)`
  cursor: pointer;
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-gap: 1.4rem;

  @media (max-width: 952px) {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-bottom: 16rem;
  }

  .image1 {
    width: 100%;
    grid-area: 1/1/3/3;
  }

  .image2 {
    width: 100%;
    grid-area: 1/3/2/4;
  }

  .image3 {
    grid-area: 2/1/2/2;
  }
  .image4 {
    grid-area: 1/4/3/4;
    img {
      height: 100%;
    }
    height: 100%;
    background: blue;
  }
  .image5 {
    grid-area: 2/2/2/4;
  }
  .image6 {
    grid-area: 3/1/3/3;
  }
  .image7 {
    grid-area: 3/4/3/4;
  }
  .image8 {
    grid-area: 3/3/3/4;
  }
`;

const ContainerPhoto = styled(motion.div)`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export default OmUss;
