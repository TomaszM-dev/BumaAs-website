import Title from "./Title";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WaveOpinions from "./WaveOpinions";
import CredentialsData from "../Data/CredentialsData";

import { useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useState } from "react";

const Swipe = function ({ setIsOpened, setIsActive, opened }) {
  const location = useLocation();
  const url = location.pathname;

  const credentialsData = CredentialsData();

  const activeHandler = (e) => {
    document.body.style.overflow = "hidden";
    // e.preventDefault();

    const imgId = `/${e.target.src.split("/")[5].split(".")[0]}`;
    setIsActive(true);
    setIsOpened(imgId);
    console.log(opened);
  };
  return (
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
      {credentialsData.map((el) => {
        return (
          <SwiperSlide
            onClick={activeHandler}
            key={el.title}
            id={el.title}
            url={el.url}
          >
            <Link to={el.url} key={el.title}>
              <div id={el.url}>
                <img src={el.image} id={el.title} alt="" />
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
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
  );
};

export default Swipe;
