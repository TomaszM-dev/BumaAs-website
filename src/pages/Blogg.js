import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import Title from "../components/Title";
import BlogData from "../Data/BlogData";
import Wave from "../components/Wave";
import FormFaq from "./FormFaq";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";

const Blogg = () => {
  const blogData = BlogData();
  const [active, setIsActive] = useState(false);
  const [opened, setIsOpened] = useState("");

  const activeHandler = (e) => {
    console.log(e.target.dataset.set);

    const current = blogData.filter((el) => el.title === e.target.dataset.set);
    console.log(current);
    setIsOpened(current);
    setIsActive(true);
  };

  const title = "Our Blog";
  return (
    <Container>
      <NavTop>
        <Nav className="nav" />
      </NavTop>
      <Title title={title} />
      <Items>
        {blogData.map((el) => {
          return (
            <Link to={`/blogg/${el.url}`}>
              <Item onClick={activeHandler} key={el.title}>
                <img data-set={el.title} src={el.img} alt="" />
                <h1 data-set={el.title}>{el.title} </h1>

                <button data-set={el.title}>See More</button>
              </Item>
            </Link>
          );
        })}
      </Items>
      <AnimatePresence>
        {active &&
          opened?.map((el) => {
            return (
              <BlogDetails
                layout
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                setIsActive={setIsActive}
                setIsOpened={setIsOpened}
                key={el.id}
                title={el.title}
                img={el.img}
                paragraph1={el.paragraph1}
                paragraph2={el.paragraph2}
                paragraph3={el.paragraph3}
                paragraph4={el.paragraph4}
                paragraph5={el.paragraph5}
                paragraphS1={el.paragraphS1}
                paragraphS2={el.paragraphS2}
                paragraphS3={el.paragraphS3}
                paragraphS4={el.paragraphS4}
                paragraphS5={el.paragraphS5}
                headline1={el.headline1}
                headline2={el.headline2}
                headline3={el.headline3}
                headline4={el.headline4}
                headline5={el.headline5}
                contact={el.contact}
                opened={opened}
              />
            );
          })}
      </AnimatePresence>
      <Wave />
      <FormFaq />
    </Container>
  );
};
const Item = styled(motion.div)`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 10rem;
  width: 30rem;

  h1 {
    margin: 2rem 0;
  }

  img {
    width: 30rem;
    height: 20rem;
    border-radius: 10px;
  }

  button {
    cursor: pointer;
  }
`;

const NavTop = styled(motion.div)`
  width: 100%;
  height: 9.1rem;
  justify-content: center;
  margin-bottom: 9rem;

  .nav {
  }
`;

const Items = styled(motion.div)`
  display: flex;
  align-items: center;
  z-index: 1000;
`;

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 110vh; */
`;

export default Blogg;
