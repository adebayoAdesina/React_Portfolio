import React from "react";
import styled from "styled-components";
import { Blur } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import Profile1 from "../assets/img/profile1.jpg";
import Profile2 from "../assets/img/profile2.jpg";
import Profile3 from "../assets/img/profile3.jpg";
import Profile4 from "../assets/img/profile4.jpg";
import Profile5 from "../assets/img/profile5.jpg";
import Profile6 from "../assets/img/profile6.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: Profile1,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatum saepe laudantium natus molestias corporis aut soluta eum at culpa.`,
    },
    {
      img: Profile2,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatum saepe laudantium natus molestias corporis aut soluta eum at culpa.`,
    },
    {
      img: Profile3,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatum saepe laudantium natus molestias corporis aut soluta eum at culpa.`,
    },
    {
      img: Profile4,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatum saepe laudantium natus molestias corporis aut soluta eum at culpa.`,
    },
    {
      img: Profile5,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatum saepe laudantium natus molestias corporis aut soluta eum at culpa.`,
    },
    {
      img: Profile6,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatum saepe laudantium natus molestias corporis aut soluta eum at culpa.`,
    },
  ];

  return (
    <StyledTestimonial id="Testimonial">
      <TestimonialHeading>
        <span>Clients always get</span>
        <span> Exceptional Work </span>
        <span>from me.....</span>
      </TestimonialHeading>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt={client.img} />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledTestimonial>
  );
};

const StyledTestimonial = styled.div`
  padding: 0rem 3rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  .swiper {
    width: 100%;
    height: 70%;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-wrapper {
    display: flex;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--orange);
  }

  .testimonial {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem;
    width: 30rem;
    height: 12rem;
    background-color: rgba(255, 255, 255, 0.26);
    border: 7px solid var(--blueCard);
    box-shadow: var(--boxShadow);
    border-radius: 20px;
  }

  .testimonial img {
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
  }

  .testimonial span {
    color: var(--gray);
  }
  @media screen and (max-width: 480px) {
    transform: scale(0.7);
    margin-top: -1rem;
  }
`;
const TestimonialHeading = styled.div`
  align-self: start;
  & > * {
    font-weight: bold;
    font-size: 2rem;
  }
  span:nth-of-type(2) {
    color: var(--orange);
  }
  @media screen and (max-width: 480px) {
    margin-left: -6rem;
  }
`;
export default Testimonial;
