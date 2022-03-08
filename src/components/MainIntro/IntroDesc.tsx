import React, { Fragment } from "react";
import styled from "styled-components";

const IntroDesc = () => {
  return (
    <Descriptions>
      <div>
        <div>
          <Description>책 읽는 재미,</Description>
        </div>
      </div>
      <div>
        <div>
          <HighLightDesc>땅콩스쿨</HighLightDesc>
          <Description>이</Description>
        </div>
      </div>
      <div>
        <div>
          <Description>만들어줄게요!</Description>
        </div>
      </div>
    </Descriptions>
  );
};

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

export const HighLightDesc = styled(Description)`
  &::before {
    content: "";
    position: absolute;
    margin-left: -20px;
    margin-top: -24px;
    width: 51px;
    height: 52px;
    background-image: url("assets/star 2.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  &::after {
    content: "";
    position: absolute;
    display: flex;
    margin-left: 0px;
    margin-top: -10px;
    width: 240px;
    height: 11px;
    background-image: url("assets/line.png");
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 767px) {
      width: 140px;
    }
  }
`;

export default IntroDesc;
