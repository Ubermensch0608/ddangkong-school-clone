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

          <div>
            <BookContentImages>
              <Image src={DiaryImage1} alt="diary__1" />
              <Image src={DiaryImage2} alt="diary__2" />
              <Image src={DiaryImage3} alt="diary__3" />
              <Image src={DiaryImage4} alt="diary__4" />
              <Image src={DiaryImageMain} alt="diary__main" />
            </BookContentImages>
          </div>
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
  align-items: center;
  padding: 20px 0;
  width: 100%;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
  @media (min-width: 1200px) {
    padding: 50px 0;
  }
  > span {
    :nth-child(1) {
      position: relative !important;
      top: -115px !important;
      left: 270px !important;
      width: 450px !important;
      z-index: 1 !important;

      @media (min-width: 768px) {
        width: 240px !important;
        top: -30px !important;
        left: 220px !important;
      }
      @media (min-width: 1200px) {
        width: 368px !important;
        top: -100px !important;
        left: 280px !important;
      }
    }
    :nth-child(2) {
      position: relative !important;
      top: 170px !important;
      left: -180px !important;
      width: 450px !important;
      z-index: 1 !important;

      @media (min-width: 768px) {
        width: 240px !important;
        top: 140px !important;
        left: -20px !important;
      }
      @media (min-width: 1200px) {
        width: 368px !important;
        top: 190px !important;
        left: -90px !important;
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
        top: -30px !important;
        left: 222px !important;
      }
      @media (min-width: 1200px) {
        display: block !important;
        width: 368px !important;
        top: -100px !important;
        left: 360px !important;
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
        top: 140px !important;
        left: -20px !important;
      }
      @media (min-width: 1200px) {
        display: block !important;
        width: 368px !important;
        top: 190px !important;
        left: -8px !important;
      }
    }
    :nth-child(5) {
      position: relative !important;
      width: 300px !important;
      top: 20px !important;
      left: -120px !important;
      z-index: 1 !important;

      @media (min-width: 768px) {
        width: 200px !important;
        top: 50px !important;
        left: -480px !important;
      }
      @media (min-width: 1200px) {
        width: 303px !important;
        top: 50px !important;
        left: -750px !important;
      }
    }
  }
`;

export default ReadingDiary;
