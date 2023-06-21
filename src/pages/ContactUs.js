import { motion } from "framer-motion";
import styled from "styled-components";
import Title from "../components/Title";
import hero from "../img/utilities/buma-hero.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const title = "Contact Us";

  const scrollHandler = (el) => {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Container id="contact">
      <Image>
        <img src={hero} alt="" />
      </Image>
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
        <HashLink to="#form" scroll={scrollHandler}>
          <button>
            Lets Talk! <FontAwesomeIcon className="icon" icon={faArrowDown} />
          </button>
        </HashLink>
      </Content>
    </Container>
  );
};

const Image = styled(motion.div)`
  /* opacity: 0.6; */

  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  position: relative;
  height: 70rem;
`;

const Content = styled(motion.div)`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #ffffffbd;
  clip-path: polygon(0 0, 100% 0%, 82% 100%, 0% 100%);

  h1 {
    margin-top: 3rem;
    font-weight: 800;
    font-size: 2.3rem;
    width: 80%;
    span {
      font-weight: 800;
    }
  }

  p {
    font-size: 1.8rem;
    width: 80%;
  }

  button {
    padding: 2rem;
    font-size: 1.4rem;
    width: 100%;
    margin-top: 2rem;

    .icon {
      margin-left: 1rem;
    }
  }
`;

export default ContactUs;
