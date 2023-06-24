import ContactUs from "./ContactUs";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import FormFaq from "../pages/FormFaq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBusinessTime,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const KontactUs = () => {
  return (
    <>
      <NavTop>
        <Nav className="nav" />
      </NavTop>
      <ContactUsContainer>
        <ContactUs />
      </ContactUsContainer>
      <Content>
        <CardContainer>
          <Card className="card1">
            <FontAwesomeIcon
              className="icon"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            <h3>Adresse</h3>
            <p>Nedre Realingsveg 136 </p>
          </Card>
          <Card className="card2">
            <FontAwesomeIcon
              className="icon"
              icon={faBusinessTime}
            ></FontAwesomeIcon>
            <h3>Åpningstider</h3>
            <p>Man - Fre 08:00 - 16:00 </p>
          </Card>
          <Card className="card3">
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <h3>Email</h3>
            <p>tilbud@buma.no</p>
          </Card>
        </CardContainer>
        <h1>Bestill dato for oppussing av fasade eller trappeoppgang</h1>
        <span>+47 406 25 620</span>
      </Content>
      <FormFaq></FormFaq>
    </>
  );
};

const ContactUsContainer = styled(motion.div)`
  display: flex;
  height: 71rem;
  align-items: flex-start;

  @media (max-width: 752px) {
    /* height: 90rem; */
  }
`;
const Card = styled(motion.div)`
  border-radius: 10px 60px 10px 60px;
  position: relative;
  background: #ffffff;
  width: 100%;
  margin: 1.3em;
  height: 25rem;
  width: 30rem;
  box-shadow: 0 0 1.8rem #bcbcbc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 952px) {
    width: 60rem;
    height: 18rem;
    flex-direction: row;
  }

  @media (max-width: 752px) {
    flex-direction: column;
    height: 34rem;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    width: 35rem;
  }

  .icon {
    font-size: 5rem;
    margin-bottom: 2rem;
    color: blue;

    @media (max-width: 952px) {
      margin-left: 5rem;
      padding: 2rem;
      font-size: 6rem;
    }

    @media (max-width: 752px) {
      margin-left: 0;
      margin-bottom: 0rem;
    }
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-transform: uppercase;

    @media (max-width: 952px) {
      padding: 2rem;
      font-size: 2.4rem;
    }
  }

  p {
    @media (max-width: 952px) {
      padding: 0 4rem;
      text-align: center;
      font-size: 1.7rem;
    }

    font-size: 1.5rem;
    padding: 0rem;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  max-width: 98rem;
  margin: -16rem 3rem;
  height: 50rem;
  align-items: start;

  @media (max-width: 952px) {
    flex-direction: column;
    height: 90rem;
    margin: -10rem 3rem;
  }

  @media (max-width: 752px) {
    /* height: 90rem; */
  }
`;

const Content = styled(motion.div)`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem auto;
  width: 100%;
  /* height: 70vh; */
  height: 100rem;

  h1 {
    font-size: 2.5rem;

    @media (max-width: 752px) {
      margin-top: 15rem;
      text-align: center;
    }
  }

  span {
    margin-top: 4rem;
    font-size: 3.4rem;
    border-bottom: 3px solid blue;
    padding-bottom: 1rem;
  }
`;

const NavTop = styled(motion.div)`
  width: 100%;
  height: 9.1rem;
`;

export default KontactUs;
