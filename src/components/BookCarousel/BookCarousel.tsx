import React from "react";
import Image from "next/image";

import SLIDE_DATA from "../../utils/SLIDE_DATA";
import styled from "styled-components";

const BookCarousel = () => {
  return (
    <CarouselWrapper>
      <CarouselSlides>
        <FirstSlide>
          {SLIDE_DATA.map((data) => (
            <Image
              key={data.id}
              src={`${data.imageSrc}`}
              alt={`slide_${data.id}`}
              width={135}
              height={102}
            />
          ))}
        </FirstSlide>
        <SecondSlide>
          {SLIDE_DATA.map((data) => (
            <Image
              key={data.id}
              src={`${data.imageSrc}`}
              alt={`slide_${data.id}`}
              width={135}
              height={102}
            />
          ))}
        </SecondSlide>
      </CarouselSlides>
    </CarouselWrapper>
  );
};

export const CarouselWrapper = styled.div`
  margin-bottom: 150px;
  margin-top: 100px;
  text-align: center;
  overflow-x: hidden;

  @media (max-width: 767px) {
    margin-bottom: 100px;
    margin-top: 60px;
  }
`;

export const CarouselSlides = styled.div`
  height: 135px;
  width: 1755px;
  text-align: left;

  @media (min-width: 768px) {
    height: 250px;
    width: 3570px;
  }

  @media (min-width: 1200px) {
    height: 250px;
    width: 3570px;
  }
`;

const FirstSlide = styled.div`
  width: 1755px;
  flex-direction: row;
  position: absolute;
  animation: 24s linear 0s infinite normal none running
    unlimited-carousel-mobile;

  @media (min-width: 768px) {
    width: 3570px;
    animation: 24s linear 0s infinite normal none running unlimited-carousel;
  }

  @media (min-width: 1200px) {
    width: 3570px;
    animation: 24s linear 0s infinite normal none running unlimited-carousel;
  }

  @keyframes unlimited-carousel {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-3570px);
    }
  }

  @keyframes unlimited-carousel-mobile {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-1755px);
    }
  }

  span > span img,
  span {
    margin-left: 15px !important;
    display: inline-block !important;
    height: 135px !important;
    width: 102px !important;

    @media (min-width: 768px) {
      margin-left: 50px !important;
      height: 250px !important;
      width: 188px !important;
    }

    @media (min-width: 1200px) {
      margin-left: 50px !important;
      height: 250px !important;
      width: 188px !important;
    }
  }
`;

const SecondSlide = styled(FirstSlide)`
  left: 1755px;
  animation: 24s linear 0s infinite normal none running
    unlimited-carousel-mobile;

  @media (min-width: 768px) {
    left: 3570px;
    animation: 24s linear 0s infinite normal none running unlimited-carousel;
  }

  @media (min-width: 1200px) {
    left: 3570px;
    animation: 24s linear 0s infinite normal none running unlimited-carousel;
  }
`;

export default BookCarousel;
