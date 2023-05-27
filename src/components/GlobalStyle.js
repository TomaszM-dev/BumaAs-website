import { createGlobalStyle } from "styled-components";

// colors :

// white 60% #fff
// dark 30% #606060
// blue 10% #1119D6

const GlobalStyle = createGlobalStyle`
  
  * {

    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  ul{
    list-style:none;

  }
  

  html{
    font-size: 75%;
    /* @media(max-width:1400px){
    }
    @media(max-width:1300px){


    } */
  }


  body {
    background: white;
    color:  #606060;
    font-family: 'Raleway', sans-serif;

  }

  button {
    font-weight:bold;
    font-size: 1.1rem;
    cursor:pointer;
    padding:1rem 2rem;
    border: none;

    text-transform: uppercase;
    background-color: #1119D6;
    transition:all 0.5s ease;
    width: 70%;
    margin: 1.4rem auto;
    border-radius: 10px;
    color: white;
    
  }

  h2{
    font-weight: lighter;
    font-size: 3.5rem;
  }
  h3{


  }

  h4{
    font-weight: bold;
    font-size: 2rem
  }

  p{
    padding: 3rem 0rem;

    font-size: 1.2rem;
    line-height: 150%;
  }

  a{
    font-size:1.1rem
  }

  span{
    font-weight: bold;
    color:#1119D6;
  }



.swiper_container {
  height: 52rem;
  padding: 2rem 0;
  position: relative;
  margin-top: 10rem;
}

.swiper-slide {
  
  width: 37rem;
  height: 42rem;
  position: relative;
}

@media (max-width: 500px) {
  .swiper_container {
    height: 47rem;
  }
  .swiper-slide {
    width: 28rem !important;
    height: 36rem !important;
  }
  .swiper-slide img {
    width: 28rem !important;
    height: 36rem !important;
  }
}

.swiper-slide img {
  /* border: 2px solid blue; */
  border-radius: 20px;
  width: 37rem;
  height: 42rem;
  box-shadow: 0 0 1.3rem #1e439f;
  border-radius: 2rem;

}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  display: none;
}

.slider-controler {
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-controler .swiper-button-next {
  left: 58% !important;
  transform: translateX(-58%) !important;
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-next {
    left: 70% !important;
    transform: translateX(-70%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-next {
    left: 80% !important;
    transform: translateX(-80%) !important;
  }
}

@media (max-width: 990px) {
  .slider-controler .swiper-button-prev {
    left: 30% !important;
    transform: translateX(-30%) !important;
  }
}

@media (max-width: 450px) {
  .slider-controler .swiper-button-prev {
    left: 20% !important;
    transform: translateX(-20%) !important;
  }
}

.slider-controler .slider-arrow {
  background: black;
  color: black;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.slider-controler .slider-arrow ion-icon {
  font-size: 2rem;
  color: #7b7b90;
}

.slider-controler .slider-arrow::after {
  content: '';
}

.swiper-pagination {
  position: relative;
  width: 15rem !important;
  bottom: 1rem;
}

.swiper-pagination .swiper-pagination-bullet {
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.swiper-pagination .swiper-pagination-bullet-active {
  background: blue;
}
`;
export default GlobalStyle;
