import { motion } from "framer-motion";
import styled from "styled-components";
import Title from "../components/Title";
import hero from "../img/buma-hero.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Form from "../components/Form";

const ContactUs = () => {
  const title = "Contact Us";
  return (
    <Container
      style={{
        background: `linear-gradient(100deg, #ffffffe6 50%, rgba(0, 0, 0, 0)50%), url(${hero})`,
      }}
    >
      <Content>
        <Title title={title} />
        <h1>
          All <span>started</span> med en samtale!
        </h1>
        <p>
          Det beste første trinnet er å snakke med en av våre prosjektledere.
        </p>
        <p>
          Under den uforpliktende samtalen kan du sjekke kompetanse til vår
          prosjektlederen og finne ut en løsning på utfordringen som står foran
          deg.
        </p>
        <button>
          Lets Talk! <FontAwesomeIcon className="icon" icon={faArrowDown} />
        </button>
      </Content>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin-top: 5rem;
  width: 100%;
  height: 80vh;
  padding: 5rem;

  h1 {
    margin-top: 3rem;
    font-weight: 800;
    font-size: 2.3rem;
    span {
      font-weight: 800;
    }
  }

  p {
    font-size: 1.8rem;
    width: 80%;
  }

  button {
    width: 30%;
    padding: 2rem;
    font-size: 1.4rem;

    margin-left: 10rem;
    margin-top: 2rem;

    .icon {
      margin-left: 1rem;
    }
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: start;
  align-items: start;
  height: 100%;
`;

export default ContactUs;
