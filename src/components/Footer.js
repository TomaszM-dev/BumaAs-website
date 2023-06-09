import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import logo from "../img/utilities/buma-logo-white.png";
import wave from "../img/utilities/footer-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <Waves>
          <Wave1></Wave1>
        </Waves>

        <img src={logo} alt="" />
        <ContactContainer>
          <Contact>
            <FontAwesomeIcon
              className=".
          icon"
              icon={faPhone}
            />
            <p> +47 406 25 620</p>
          </Contact>
          <Contact>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <p>tilbud@buma.no</p>
          </Contact>
          <Contact>
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <p>Nedre Rælingsveg 136 </p>
            <p>2005 Rælingsveg</p>
          </Contact>
        </ContactContainer>
      </Container>
      <Foot>
        <p>BUMA © 2023 | Personvernerklæring | SITE BY TM-DEV</p>
      </Foot>
    </FooterStyle>
  );
};

const Contact = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 3rem;
  justify-content: center;
  border-left: 1px solid #bcbcbc;
  padding-left: 3rem;

  @media (max-width: 650px) {
    margin: 2rem;
    border-left: none;
    align-self: center;
    justify-self: center;
    padding-left: 0;
  }

  .icon {
    color: white;
    margin-bottom: 1rem;
    font-size: 3rem;
    padding: 1rem;
  }

  p {
    padding: 0;
    font-size: 1.8rem;
    color: white;
    font-weight: 500;
  }
`;
const Waves = styled(motion.div)``;
const FooterStyle = styled(motion.div)`
  position: relative;
  background: #040482;
  width: 100%;
  margin-top: 1rem;
  z-index: 1000;

  @media (max-width: 952px) {
    padding: 1rem 0;
  }

  @media (max-width: 750px) {
  }
`;
const ContactContainer = styled(motion.div)`
  display: flex;
  margin-left: 7rem;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    margin-left: 0;
    margin: 4rem 0;
    flex-wrap: nowrap;
    text-align: center;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const WaveShared = styled(motion.div)`
  position: absolute;
  top: -100px;
  left: 1.4rem;
  width: 100%;
  height: 10rem;
  background: url(${wave});

  margin-left: -1.5rem;

  @media (max-width: 750px) {
    top: -8.5rem;
  }
`;

const Wave1 = styled(WaveShared)`
  z-index: 1000;
  opacity: 1;
  bottom: 0;
`;

const Container = styled(motion.div)`
  width: 100%;
  position: relative;

  padding: 2rem 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;

  img {
    flex: 0 0 20%;
    width: 24rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Foot = styled(motion.div)`
  height: 7rem;
  color: #b0afaf;
  border-top: 1px solid #fff;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export default Footer;
