import React from "react";

import { SectionWrapper } from "../Layout/SectionWrapper";
import BookCarousel from "./BookCarousel";
import BookDescription from "./BookDescription";

import styled from "styled-components";

const BookCarouselSection = () => {
  const BASE_URL = "https://ddangkongschool.com";

  return (
    <SectionWrapper>
      <BookCarouselContents>
        <BookDescription />
        <BookCarousel />
      </BookCarouselContents>
    </SectionWrapper>
  );
};

export const BookCarouselContents = styled(SectionWrapper)`
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
`;

export default BookCarouselSection;
