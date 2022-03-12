import React from "react";

import BookCarouselSection from "./BookCarousel/BookCarouselSection";
import BrandIntroduce from "./BrandIntroduce/BrandIntroduce";
import LiveVideo from "./LiveVideo/LiveVideo";
import MainIntro from "./MainIntro/MainIntro";

import styled from "styled-components";
import SelectedBook from "./SelectedBook/SelectedBook";

const FullPage = () => {
  return (
    <SectionWrapper>
      <Sections>
        <MainIntro />
        <BrandIntroduce />
        <LiveVideo />
        <SelectedBook />
        <BookCarouselSection />
      </Sections>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  width: 100%;
  /* margin-top: 60px;
  @media (min-width: 768px) {
    margin-top: 90px;
  } */
`;

export const Sections = styled.div`
  width: 100%;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
`;

export default FullPage;
