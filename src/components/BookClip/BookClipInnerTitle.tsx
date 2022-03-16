import React from "react";
import styled from "styled-components";
import { FadeInContent } from "../BookCarousel/BookDescription";

const BookClipInnerTitle = () => {
  return (
    <BookClipTitleContent>
      <div>
        <FadeInContent>
          <div>
            <BookClipTitle>땅콩스쿨만의 특징</BookClipTitle>
          </div>
        </FadeInContent>
      </div>
    </BookClipTitleContent>
  );
};

export const BookClipTitleContent = styled.div`
  margin: 0px auto;
`;

export const BookClipTitle = styled.div`
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 1200px) {
    font-size: 50px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export default BookClipInnerTitle;
