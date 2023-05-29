import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import logo from "../img/buma-logo-white.png";

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <Content>
        <Contact>
          <h4>Kontakt Oss</h4>
          <p>Så kan vi drøfte ditt behov for oppussing</p>
          <p>+47 406 25 620</p>
          <p>tilbud@buma.no</p>
        </Contact>
        <Line></Line>
        <Contact>
          <h4>Adresse</h4>
          <p className="address">Nedre Rælingsveg 136, 2005 Rælingen</p>
        </Contact>
      </Content>
      <Foot>
        <p>BUMA © 2023 | Personvernerklæring | SITE BY TM-DEV</p>
      </Foot>
    </Container>
  );
};

const Foot = styled(motion.div)`
  height: 7rem;
  color: #b0afaf;
  border-top: 1px solid #fff;
  /* width: 80%; */
`;

const Contact = styled(motion.div)`
  flex: 0 0 32%;
  p {
    padding: 0.5rem;
    color: #989898;
    font-size: 1.7rem;
  }

  h4 {
    margin-bottom: 1rem;
  }

  .address {
    margin-top: 3rem;
  }
`;

const Line = styled(motion.div)`
  background: white;
  width: 0.1rem;
  height: 12rem;
  align-self: center;
`;

const Content = styled(motion.div)`
  h4 {
    font-size: 2.3rem;
    text-transform: uppercase;
  }

  padding: 2rem;
  width: 70%;
  color: white;
  display: flex;

  justify-content: space-between;
`;

const Container = styled(motion.div)`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: -9rem;
  height: 45rem;
  clip-path: polygon(50% 18%, 100% 0, 100% 100%, 0 100%, 0 0);
  background: #040482;

  img {
    width: 16rem;
  }
`;

export default Footer;
