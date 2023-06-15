import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import styled from "styled-components";
import Nav from "../components/Nav";
import ProjectsData from "../Data/ProjectsData";
import Title from "../components/Title";
import Wave from "../components/Wave";
import { useState, useRef } from "react";
import FormFaq from "../pages/FormFaq";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProsjekterDetails from "../components/ProsjekterDetails";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Prosjekter = () => {
  const projectsData = ProjectsData();
  const title = "Our Projects";

  const [active, setIsActive] = useState(false);
  const [opened, setIsOpened] = useState("");

  const activeHandler = (e) => {
    console.log(e.target.dataset.set);

    const current = projectsData.filter(
      (el) => el.title === e.target.dataset.set
    );
    console.log(current);
    setIsOpened(current);
    setIsActive(true);
  };

  return (
    <Page>
      <Wave className="wave" />
      <NavTop>
        <Nav className="nav" />
      </NavTop>
      <Container>
        <TitleContainer>
          <Title title={title} />
          <p>
            All our projects are unique and <span>beautifull</span>
          </p>
        </TitleContainer>
        <Projects>
          {projectsData.map((el) => {
            return (
              <Link
                to={`/prosjekter/${el.url}`}
                className={`project${el.id} project`}
              >
                <Project
                  data-set={el.title}
                  className={`project${el.id} project`}
                  key={el.title}
                  onClick={activeHandler}
                >
                  <img data-set={el.title} src={el.image} alt="" />
                  <h3 data-set={el.title}>{el.title}</h3>
                  <button data-set={el.title}>See More</button>
                </Project>
              </Link>
            );
          })}
        </Projects>
      </Container>
      <AnimatePresence>
        {active &&
          opened?.map((el) => {
            return (
              <ProsjekterDetails
                layout
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                setIsActive={setIsActive}
                setIsOpened={setIsOpened}
                key={el.id}
                title={el.title}
                about={el.about}
                image={el.image}
                referancer={el.referancer}
                paragraph={el.paragraph}
                paragraph1={el.paragraph1}
                opened={opened}
              />
            );
          })}
      </AnimatePresence>
      <FormFaq />
      <Footer />
    </Page>
  );
};

const TitleContainer = styled(motion.div)`
  align-self: start;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 5rem auto;

  p {
    font-size: 2.2em;
  }
`;

const Project = styled(motion.div)`
  cursor: pointer;
  position: relative;
  box-shadow: 0 0.3rem 0.9rem #7e7e7e;
  border-radius: 5px;
  transition: all 1s;
  height: 18rem;
  overflow: hidden;

  &:before {
    content: "";
    background: #0000ff27;

    position: absolute;
    top: 0;
    left: 0rem;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    transition: all 1s;
  }

  &:hover:before {
    background: red;
  }

  h3 {
    transition: all 1s;
    padding: 1rem;
    position: absolute;
    font-size: 2rem;
    left: 0;
    color: #ffffff;
    bottom: 3.5rem;
    opacity: 0;
  }

  &:hover h3 {
    opacity: 1;
  }

  button {
    margin: 1rem;
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 8rem;
    font-size: 0.9rem;
    padding: 1rem;
    opacity: 0;
  }

  &:hover button {
    opacity: 1;
    bottom: 0;
  }

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

const NavTop = styled(motion.div)`
  width: 100%;
  height: 9.8rem;
`;

const Container = styled(motion.div)`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
`;

const Page = styled(motion.div)`
  background: #e8e8e8;
  flex-direction: column;
  display: flex;

  /* height: 110vh; */
  width: 100%;

  .wave {
  }
`;

const Projects = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.3fr 0.5fr 0.5fr;
  grid-gap: 1.4rem;

  margin-bottom: 10rem;

  .project1 {
    width: 100%;
    grid-area: 1/1/2/1;
  }

  .project2 {
    width: 100%;
    grid-area: 1/2/2/4;
  }

  .project3 {
    grid-area: 2/3/3/4;
  }
  .project4 {
    grid-area: 1/4/3/4;
    img {
      height: 100%;
    }
    height: 100%;
    background: blue;
  }
  .project5 {
    grid-area: 2/1/2/3;
  }
  .project6 {
    grid-area: 3/1/3/2;
  }
  .project7 {
    grid-area: 3/3/3/5;
  }
  .project8 {
    grid-area: 3/2/3/3;
  }
`;

export default Prosjekter;
