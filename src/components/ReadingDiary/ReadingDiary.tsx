import React from "react";
import styled from "styled-components";
import { FadeInContent } from "../BookCarousel/BookDescription";
import { SectionWrapper } from "../Layout/SectionWrapper";
import { SubDesc, TitleDesc } from "../SelectedBook/SelectedBook";

const ReadingDiary = () => {
  return (
    <SectionWrapper>
      <SectionWrapper>
        <FadeInContent>
          <div>
            <DiaryDesc>매일 매일 알아서 기록하는 독서 일기</DiaryDesc>
          </div>
        </FadeInContent>
        <FadeInContent>
          <div>
            <DiarySubDesc>
              오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지
              독서일기를 통해 확인해보세요. 읽기만 해도 자동으로 기록되고,
              공유도 가능해요.
            </DiarySubDesc>
          </div>
        </FadeInContent>
      </SectionWrapper>
      <div></div>
    </SectionWrapper>
  );
};

export const DiaryDesc = styled(TitleDesc)``;

export const DiarySubDesc = styled(SubDesc)`
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export default ReadingDiary;
