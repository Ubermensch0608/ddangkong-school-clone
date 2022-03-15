import React from "react";

import DiaryImage1 from "/public/assets/reading-diary-1.png";
import DiaryImage2 from "/public/assets/reading-diary-2.png";
import DiaryImage3 from "/public/assets/reading-diary-3.png";
import DiaryImage4 from "/public/assets/reading-diary-4.png";
import DiaryImageMain from "/public/assets/reading-diary-main.png";
import { FadeInContent } from "../BookCarousel/BookDescription";
import { SectionWrapper } from "../Layout/SectionWrapper";
import { SubDesc, TitleDesc } from "../SelectedBook/SelectedBook";

import styled from "styled-components";
import Image from "next/image";
import { CrossDeviceInner } from "../CrossDevice/CrossDevice";

const ReadingDiary = () => {
  return (
    <SectionWrapper>
      <SectionWrapper>
        <ReadingDiaryInner>
          <InnerDesc>
            <DiaryDesc>매일 매일 알아서 기록하는 독서 일기</DiaryDesc>

            <DiarySubDesc>
              오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지
              독서일기를 통해 확인해보세요. 읽기만 해도 자동으로 기록되고,
              공유도 가능해요.
            </DiarySubDesc>
          </InnerDesc>

          <BookContentImages>
            <Image src={DiaryImage1} alt="diary__1" />
            <Image src={DiaryImage2} alt="diary__2" />
            <Image src={DiaryImage3} alt="diary__3" />
            <Image src={DiaryImage4} alt="diary__4" />
            <Image src={DiaryImageMain} alt="diary__main" />
          </BookContentImages>
        </ReadingDiaryInner>
      </SectionWrapper>
    </SectionWrapper>
  );
};

export const ReadingDiaryInner = styled(CrossDeviceInner)`
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const InnerDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DiaryDesc = styled(TitleDesc)``;

export const DiarySubDesc = styled(SubDesc)`
  text-align: center;
`;

export const BookContentImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  > span {
    :nth-child(1) {
      position: relative !important;
      top: 80px !important;
      left: -100px !important;
      width: 400px !important;
      z-index: 1 !important;

      @media (min-width: 768px) {
        width: 240px !important;
        top: 100px !important;
        left: -280px !important;
      }
      @media (min-width: 1200px) {
        width: 368px !important;
        top: 100px !important;
        left: -390px !important;
      }
    }
    :nth-child(2) {
      position: relative !important;
      top: 120px !important;
      left: -100px !important;
      width: 400px !important;
      z-index: 1 !important;

      @media (min-width: 768px) {
        width: 240px !important;
        top: 150px !important;
        left: -280px !important;
      }
      @media (min-width: 1200px) {
        width: 368px !important;
        top: 170px !important;
        left: -390px !important;
      }
    }
    :nth-child(3) {
      position: relative !important;
      display: none !important;
      top: 60px !important;
      left: 200px !important;
      width: 650px !important;
      z-index: 1 !important;

      @media (min-width: 768px) {
        display: block !important;
        width: 240px !important;
        top: -171px !important;
        left: 270px !important;
      }
      @media (min-width: 1200px) {
        display: block !important;
        width: 368px !important;
        top: -316px !important;
        left: 390px !important;
      }
    }
    :nth-child(4) {
      position: relative !important;
      display: none !important;
      z-index: 1 !important;
      flex-direction: row !important;

      @media (min-width: 768px) {
        display: block !important;
        width: 240px !important;
        top: -121px !important;
        left: 270px !important;
      }
      @media (min-width: 1200px) {
        display: block !important;
        width: 368px !important;
        top: -258px !important;
        left: 390px !important;
      }
    }
    :nth-child(5) {
      position: relative !important;
      width: 300px !important;
      top: -420px !important;
      left: 300px !important;
      z-index: 1 !important;

      @media (min-width: 768px) {
        width: 200px !important;
        top: -480px !important;
        left: 0px !important;
      }
      @media (min-width: 1200px) {
        width: 303px !important;
        top: -780px !important;
        left: 0 !important;
      }
    }
  }
`;

export default ReadingDiary;
