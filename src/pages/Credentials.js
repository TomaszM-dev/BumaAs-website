import Title from "../components/Title";
import { motion } from "framer-motion";
import styled from "styled-components";
import opinion from "../img/references/reference.webp";
import WaveOpinions from "../components/WaveOpinions";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const Credentials = () => {
  const title = "Opinions";
  return (
    <Container id="referenser">
      <WaveOpinions />
      <TitleContainer>
        <Title title={title} />
        <h4>
          These are people how trusted us and were <span> really happy</span>{" "}
          about that
        </h4>
      </TitleContainer>
      <Opinions>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={opinion} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={opinion} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={opinion} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={opinion} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={opinion} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={opinion} alt="slide_image" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </Opinions>
    </Container>
  );
};

const Opinions = styled(motion.div)`
  height: 40rem;
  margin-top: 7rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Opinion = styled(motion.div)`
  img {
    padding: 2rem;
    width: 30rem;
    height: 40rem;
  }
`;

const Container = styled(motion.div)`
  position: relative;
  margin-top: 1rem;
  width: 100%;
  height: 100vh;
`;

const TitleContainer = styled(motion.div)`
  width: 50%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    text-align: center;
    font-size: 2.5rem;
    margin-top: 3rem;
  }
`;

export default Credentials;
