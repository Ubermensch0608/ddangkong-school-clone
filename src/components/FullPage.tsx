import React from "react";

import styled from "styled-components";
import BrandIntroduce from "./BrandIntroduce/BrandIntroduce";
import MainIntro from "./MainIntro/MainIntro";

const FullPage = () => {
  return (
    <SectionWrapper>
      <Sections>
        <MainIntro />
        <BrandIntroduce />
      </Sections>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  width: 100%;
  /* margin-top: 60px;
  @media (min-width: 768px) {
    margin-top: 90px;
  } */
`;

export const Sections = styled.div`
  width: 100%;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
`;

export default FullPage;
