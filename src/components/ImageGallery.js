import Title from "./Title";
import ImageGalleryData from "../Data/ImageGalleryData";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImageGallery = () => {
  const imageData = ImageGalleryData();
  const title = "Image Gallery";
  return (
    <>
      <Container>
        <TitleContainer>
          <Title title={title} />
        </TitleContainer>
        <Pictures>
          {imageData.map((el, index) => {
            return (
              <Picture key={index} className={`image${el.id} image`}>
                <img src={el.img} alt="" />
              </Picture>
            );
          })}
        </Pictures>
      </Container>
    </>
  );
};

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
    grid-area: 3/1/3/2;
  }
  .image7 {
    grid-area: 3/3/3/5;
  }
  .image8 {
    grid-area: 3/2/3/4;
  }
`;

const Container = styled(motion.div)`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export default ImageGallery;
