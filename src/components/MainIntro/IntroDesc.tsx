import React, { Fragment } from "react";
import styled from "styled-components";

const IntroDesc = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

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

export default IntroDesc;
