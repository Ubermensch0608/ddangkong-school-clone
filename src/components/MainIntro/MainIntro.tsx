import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../Layout/SectionWrapper";
import MouseIcon from "/public/assets/mouse-icon.png";
import styled from "styled-components";
import Image from "next/image";

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

        <ScrollGuide>
          <Image src={MouseIcon} alt="mouse-icon" />
        </ScrollGuide>
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
    &:nth-child(1) {
      animation: 0.7s ease-in 0s alternate none running fade-in;
    }
    &:nth-child(2) {
      animation: 0.71s ease-in 0s alternate none running fade-in;
    }
    &:nth-child(3) {
      animation: 0.72s ease-in 0s alternate none running fade-in;
    }
  }

  @keyframes fade-in {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
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

export const ScrollGuide = styled.div`
  position: absolute;
  width: 73px;
  min-width: 73px;
  display: block;
  bottom: 0px;
  padding-bottom: 50px;
  left: 50%;
  animation: 0.7s ease-in 0s infinite alternate none running jump;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 3.8%;
    min-width: 48px;
    position: absolute;
    animation: 0.7s ease-in 0s infinite alternate none running jump;
    display: block;
    bottom: 0px;
    padding-bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes jump {
    from {
      padding-bottom: 100px;
    }
    to {
      padding-bottom: 50px;
    }
  }
`;
export default MainIntro;
