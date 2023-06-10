import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnim } from "../animations";
import Wave from "../components/WaveContact";
import styled from "styled-components";
import Nav from "../components/Nav";
import image from "../img/utilities/buma-hero.avif";

const OmUss = () => {
  return (
    <About>
      <Nav />
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} c z>
              true.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography idead that you have. We
          have proffesionals.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={image} alt="" />
      </Image>
      <Wave />
    </About>
  );
};

const About = styled(motion.div)`
  min-height: 90vh;
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
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    padding: 2rem 0;
  }
`;

const Image = styled.div`
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    z-index: 2;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OmUss;
