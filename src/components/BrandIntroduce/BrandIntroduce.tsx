import React from "react";
import Image from "next/image";

import LogoAnimation from "/public/assets/gif/logo_animation.gif";
import { SectionWrapper } from "../Layout/SectionWrapper";

import styled from "styled-components";

const BrandIntroduce = () => {
  return (
    <SectionWrapper>
      <IntroduceWrapper>
        <IntroduceContents>
          <div>
            <LogoAnimationImage>
              <div>
                <Image src={LogoAnimation} alt="logo_animation" />
              </div>
            </LogoAnimationImage>
          </div>
          <IntroduceContent>
            <div>
              <BrandIntroTitle>땅콩스쿨이란?</BrandIntroTitle>
            </div>
          </IntroduceContent>
          <BrandIntroDesc>
            <IntroduceContent>
              <div>
                <span>
                  실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,
                  <br />
                  친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인
                  서비스입니다.
                </span>
              </div>
            </IntroduceContent>
          </BrandIntroDesc>
        </IntroduceContents>
      </IntroduceWrapper>
    </SectionWrapper>
  );
};

export const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0px auto;
  background-color: rgb(255, 177, 0);
`;

export const IntroduceContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: 130px 20px 150px 20px;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0px auto;
  }
`;

export const LogoAnimationImage = styled.div`
  /* 해당 섹션 진입시  
  1. 위에서 진입할 때
        top: -40px에서 0px로 변경,
        opacity: 0에서 1로 변견 (점진적으로)
  2. 아래에서 진입할 때
        top: 40px에서 0px로 변경,
        opacity: 0에서 1로 변견 (점진적으로)
  */
  top: 0px;
  opacity: 1;

  > div > span {
    img {
      width: 67px !important;
      height: 50px !important;
      image-rendering: -webkit-optimize-contrast;
      backface-visibility: hidden;

      @media (min-width: 768px) {
        width: 134px !important;
        height: 100px !important;
      }
    }
  }
`;

export const IntroduceContent = styled.div`
  top: 0px;
  opacity: 1;
`;

export const BrandIntroTitle = styled.span`
  margin-top: 10px;
  font-family: S-CoreDream-4;
  font-size: 30px;
  color: rgb(255, 255, 255);

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const BrandIntroDesc = styled.div`
  margin: 30px 0px 0px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: rgb(255, 255, 255);

  > div span {
    white-space: pre-wrap;
  }

  @media (min-width: 768px) {
    margin: 50px 0px 0px;
    font-size: 24px;
    line-height: 1.67;
  }

  @media (min-width: 1200px) {
    margin: 50px 0px 0px;
    font-size: 24px;
    line-height: 1.67;
  }
`;

export default BrandIntroduce;
