import React from "react";
import { SectionWrapper } from "../Layout/SectionWrapper";

import styled from "styled-components";

const MainIntro = () => {
  return (
    <SectionWrapper>
      <Introduce>
        <Descriptions>
          <div>
            <div>
              <Description>책 읽는 재미,</Description>
            </div>
          </div>
          <div>
            <div>
              <Description style={{ color: "rgb(253, 196, 65)" }}>
                땅콩스쿨
              </Description>
              <Description>이</Description>
            </div>
          </div>
          <div>
            <div>
              <Description>만들어줄게요!</Description>
            </div>
          </div>
        </Descriptions>
        <ScrollGuide></ScrollGuide>
      </Introduce>
    </SectionWrapper>
  );
};

export const Introduce = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;

  height: 100vh;
  width: 100%;
  background-image: url("/assets/img_main.png"), url("/assets/bg 1.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Descriptions = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  margin-top: 442px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 497px;
  }

  @media (min-width: 1200px) {
    padding-left: 0px;
    padding-right: 0px;
    max-width: 1140px;
    margin-top: 230px;
  }

  > div {
    top: 0;
    opacity: 1;
  }
`;

export const Description = styled.span`
  width: 212px;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: rgb(255, 255, 255);
  white-space: pre-wrap;

  @media (min-width: 1200px) {
    width: 424px;
    font-size: 60px;
    line-height: 80px;
  }

  @media (min-width: 768px) {
    width: 424px;
    font-size: 60px;
    line-height: 80px;
  }
`;

export const ScrollGuide = styled.div``;
export default MainIntro;
