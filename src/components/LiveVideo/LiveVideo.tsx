import React from "react";
import styled from "styled-components";
import { FadeInContent } from "../BookCarousel/BookDescription";
import { SectionWrapper } from "../Layout/SectionWrapper";

const LiveVideo = () => {
  return (
    <SectionWrapper>
      <LiveVideoSection>
        <LiveVideoContents>
          <DescriptionWrapper>
            <DescriptionContent>
              <FadeInContent>
                <div>
                  <DescTitle>랜선 라이브 북클래스</DescTitle>
                </div>
              </FadeInContent>
              <FadeInContent>
                <div>
                  <DescSubTitle>
                    친구들과 함께 그림 그리기, 퀴즈 풀기, 선생님과 대화하며
                    경험해요!
                  </DescSubTitle>
                </div>
              </FadeInContent>
            </DescriptionContent>
          </DescriptionWrapper>
        </LiveVideoContents>
      </LiveVideoSection>
    </SectionWrapper>
  );
};

export const LiveVideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;

  height: 628px;
  width: 100%;
  overflow-x: hidden;
  background-image: url("/assets/live-video-backgorund.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(255, 255, 255);

  @media (min-width: 768px) {
    height: 1042px;
  }

  @media (min-width: 1200px) {
    height: 938px;
  }
`;

export const LiveVideoContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 0 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 30px;
    margin: 0px auto;
  }
`;

export const DescriptionWrapper = styled.div`
  position: absolute;
  top: 100px;

  @media (min-width: 768px) {
    top: 150px;
  }

  @media (min-width: 1200px) {
    left: 30px;
    top: 350px;
  }
`;

export const DescriptionContent = styled.div`
  @media (min-width: 1200px) {
    -webkit-box-pack: center;
    justify-content: center;
  }
`;

export const DescTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);

  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 1.4;
    text-align: center;
  }

  @media (min-width: 1200px) {
    font-size: 50px;
    line-height: 1.4;
    text-align: left;
  }
`;

export const DescSubTitle = styled(DescTitle)`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.75;
  margin-top: 50px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.67;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export default LiveVideo;
