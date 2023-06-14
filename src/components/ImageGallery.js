import Title from "./Title";
import ImageGalleryData from "../Data/ImageGalleryData";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageGallery = () => {
  const imageData = ImageGalleryData();
  const title = "Image Gallery";
  const location = useNavigate();

  const [active, setIsActive] = useState(false);
  const [opened, setIsOpened] = useState("");

  const activeHandler = (e) => {
    setIsActive(true);
    console.log(e.target.dataset.set);
    console.log(active);

    const current = imageData.filter((el) => el.id === +e.target.dataset.set);
    console.log(current);
    setIsOpened(current);
  };

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      setIsActive(false);
      setIsOpened("");
      location("/omuss");
    } else {
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title title={title} />
      </TitleContainer>
      <Pictures>
        {imageData.map((el, index) => {
          return (
            <Link
              to={`/omuss/${el.id}`}
              data-set={el.id}
              className={`image${el.id} image`}
            >
              <Picture
                onClick={activeHandler}
                key={index}
                className={`image${el.id} `}
                data-set={el.id}
              >
                <img data-set={el.id} src={el.img} alt="" />
              </Picture>
            </Link>
          );
        })}
      </Pictures>
      {active &&
        opened.map((el) => {
          return (
            <CardShadow
              className="shadow"
              onClick={exitDetailHandler}
            ></CardShadow>
          );
        })}
    </Container>
  );
};

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

const Container = styled(motion.div)`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export default ImageGallery;
