import React from "react";
import styled from "styled-components";
import { FadeInContent } from "../BookCarousel/BookDescription";

const CrossDeviceDescInner = () => {
  return (
    <DescInner>
      <div>
        <FadeInContent>
          <div>
            <CrossDeviceDesc>
              실시간 방송 형태로 제공되는
              <br />
              신개념 책 읽기
            </CrossDeviceDesc>
          </div>
        </FadeInContent>
      </div>

      <div>
        <FadeInContent>
          <div>
            <CrossDeviceSubDesc>
              방송 중이라면 언제든 접속하세요.
              <br />
              수강신청, 수업예약 없이 편하게 수업참여가 가능해요.
            </CrossDeviceSubDesc>
          </div>
        </FadeInContent>
      </div>
    </DescInner>
  );
};

export const DescInner = styled.div``;

export const CrossDeviceDesc = styled.div`
  white-space: pre-wrap;
  text-align: center;
  font-size: 30px;
  line-height: 1.47;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 1.44;
  }

  @media (min-width: 1200px) {
    font-size: 50px;
    line-height: 1.44;
  }
`;

export const CrossDeviceSubDesc = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  padding-top: 50px;
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.67;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export default CrossDeviceDescInner;
