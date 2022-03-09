import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../Layout/SectionWrapper";

const BookCarousel = () => {
  return (
    <SectionWrapper>
      <BookCarouselContents>
        <DescContent>
          <FadeInContent>
            <div>
              <BookDesc>입학 전 1000권 읽기! 땅콩스쿨로 도전해보세요.</BookDesc>
            </div>
          </FadeInContent>
          <FadeInContent>
            <div>
              <BookSubDesc>
                매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요. 독서를
                통해 배움의 즐거움을 알아가 보세요.
              </BookSubDesc>
            </div>
          </FadeInContent>
        </DescContent>
      </BookCarouselContents>
    </SectionWrapper>
  );
};

export const BookCarouselContents = styled(SectionWrapper)`
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
`;

export const DescContent = styled.div`
  margin-top: 150px;
`;

export const FadeInContent = styled.div`
  top: 0px;
  opacity: 1;
`;

export const BookDesc = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 1.44;
  }

  @media (min-width: 1200px) {
    font-size: 50px;
    line-height: 1.44;
  }
`;

export const BookSubDesc = styled(BookDesc)`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.75;
  padding-top: 50px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.67;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export default BookCarousel;
