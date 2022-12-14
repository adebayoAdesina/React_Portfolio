import React, {useContext} from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../assets/img/sidebar.png";
import Ecommerce from "../assets/img/ecommerce.png";
import HOC from "../assets/img/hoc.png";
import MusicApp from "../assets/img/musicapp.png";
import ThemeContext from "../Context/Themecontext";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <StyledPortfolio id="Portfolio">
      <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
      <span style={{color: darkMode ? 'var(--orange)' : ''}}>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="sliders"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="HOC" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="MusicApp" />
        </SwiperSlide>
      </Swiper>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  span:nth-of-type(1) {
    color: var(--black);
    font-size: 2.5rem;
    font-weight: bold;
  }

  .swiper {
    overflow: visible !important;
  }
  .swiper-wrapper {
    display: flex;
  }
  .sliders {
    width: 100%;
    margin-top: 3rem;
  }
  .swiper-slide {
    width: 20rem;
  }

  img {
    width: 19rem;
    filter: drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25));
    border-radius: 19px;
  }
  @media screen and (max-width: 480px) {
      margin-top: 18rem;
    }
`;

export default Portfolio;
