import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../Layout/SectionWrapper";
import MouseIcon from "/public/assets/mouse-icon.png";
import styled from "styled-components";
import Image from "next/image";
import IntroDesc from "./IntroDesc";

const MainIntro = () => {
  return (
    <SectionWrapper>
      <Introduce>
        <IntroDesc />
        <ScrollGuide>
          <Image src={MouseIcon} alt="mouse-icon" />
        </ScrollGuide>
      </Introduce>
    </SectionWrapper>
  );
};

export const Introduce = styled.div`
  position: relative;
  z-index: 1;
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
  }

  @keyframes jump {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
export default MainIntro;
