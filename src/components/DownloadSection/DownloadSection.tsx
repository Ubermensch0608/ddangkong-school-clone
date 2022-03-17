import React from "react";
import Image from "next/image";

import { SectionWrapper } from "../Layout/SectionWrapper";
import LeftCloud from "/public/assets/DownloadSection/left-cloud.png";
import RightCloud from "/public/assets/DownloadSection/right-cloud.png";
import TicketBody from "/public/assets/DownloadSection/ticket-yellow.png";
import MiniLogo from "/public/assets/DownloadSection/ticket-logo.png";
import LabelTip from "/public/assets/DownloadSection/button-label-tip.png";
import DownloadIcon from "/public/assets/DownloadSection/ticket-download-icon.png";
import FooterHead from "/public/assets/DownloadSection/footer-head.png";

import styled from "styled-components";
import { FadeInContent } from "../BookCarousel/BookDescription";

const DownloadSection = () => {
  return (
    <SectionWrapper>
      <DownloadSectionWrapper>
        <TopImages>
          <Image src={LeftCloud} alt="cloud__left" />
          <Image src={RightCloud} alt="cloud__right" />
        </TopImages>
        <InnerContents>
          <div>
            <div>
              <FadeInContent>
                <div>
                  <DownloadTitle>지금 다운로드 받으세요!</DownloadTitle>
                </div>
              </FadeInContent>
            </div>
          </div>

          <TicketHolder>
            <Image src={TicketBody} alt="tickey-body__yellow" />
            <TicketLeft>
              <LogoWrapper>
                <Image src={MiniLogo} alt="logo-ticket__mini" />
              </LogoWrapper>
              <LeftDesc>
                <div>책을 보는 새로운 방법</div>
              </LeftDesc>
              <LeftSubDesc>
                <div>지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!</div>
              </LeftSubDesc>
            </TicketLeft>
            <TicketRight>
              <Buttons>
                <ButtonLabel>
                  <div>
                    <LabelText>
                      <div>
                        <div>회원가입에 걸리는 시간 단 3초!</div>
                      </div>
                    </LabelText>
                    <Image src={LabelTip} alt="label-tip" />
                  </div>
                </ButtonLabel>
                <DownloadButton>
                  <Image src={DownloadIcon} alt="download-icon" />
                  <div>
                    <div>앱 다운로드 하기</div>
                  </div>
                </DownloadButton>
              </Buttons>
            </TicketRight>
          </TicketHolder>
        </InnerContents>
        <Image src={FooterHead} alt="footer-head" />
      </DownloadSectionWrapper>
    </SectionWrapper>
  );
};

export const DownloadSectionWrapper = styled(SectionWrapper)`
  height: auto;
  overflow: hidden;
  background-color: rgb(249, 249, 249);

  @media (min-width: 1200px) {
    height: 1013px;
  }

  > span {
    position: absolute;
    bottom: 0px;
    z-index: 1;
    min-width: 1920px;
    width: 100%;
    height: 33px;

    @media (min-width: 768px) {
      height: 82px;
    }
  }
`;

export const TopImages = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 1200px;
  }

  @media (min-width: 1200px) {
    width: 1920px;
  }

  > span {
    position: absolute !important;

    :nth-child(1) {
      left: -289px !important;
      top: 21px !important;
      width: 383px !important;

      @media (min-width: 768px) {
        width: 637px !important;
        left: -310px !important;
        top: 64px !important;
      }
      @media (min-width: 1200px) {
        width: 637px !important;
        left: -73px !important;
        top: 105px !important;
      }
    }

    :nth-child(2) {
      right: -142px !important;
      top: 8px !important;
      width: 221px !important;

      @media (min-width: 768px) {
        top: 56px !important;
        right: 53px !important;
        width: 367px !important;
      }
      @media (min-width: 1200px) {
        top: 56px !important;
        right: 151px !important;
        width: 367px !important;
      }
    }
  }
`;

export const InnerContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 100px 20px 0 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 150px 30px 0 30px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 150px 30px 0 30px;
    margin: 0px auto;
  }
`;

export const DownloadTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 1.44;
  }
`;

export const TicketHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 620px;
  margin: 60px 20px 29px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 788px;
    max-width: none;
    height: 565px;
    margin: 60px 20px 116px 80px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    width: 920px;
    height: 565px;
    margin: 57px 20px 116px 80px;
  }

  @media (min-width: 994px) {
    flex-direction: row;
    width: 1024px;
    height: 529px;
    margin: 101px 20px 116px 85px;
  }

  @media (min-width: 1088px) {
    flex-direction: row;
    width: 1090px;
    height: 529px;
    margin: 100px 20px 116px 75px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 1220px;
    height: 529px;
    margin: 100px 20px 116px 100px;
  }

  > span {
    position: absolute;
    width: 390px;
    height: 100%;
    z-index: 1;
    left: -27px;

    @media (min-width: 768px) {
      width: 100%;
      left: 0px;
    }
    @media (min-width: 1200px) {
      left: 0px;
    }
  }
`;

export const TicketLeft = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 2;
  margin-top: 70px;

  @media (min-width: 768px) {
    width: 407px;
    margin-top: 0px;
    margin-bottom: 70px;
  }
  @media (min-width: 900px) {
    width: 436px;
    margin-bottom: 70px;
  }
  @media (min-width: 994px) {
    width: 572px;
    margin-bottom: 70px;
  }
  @media (min-width: 1088px) {
    width: 591px;
    margin-bottom: 70px;
  }
  @media (min-width: 1200px) {
    width: 640px;
    margin-bottom: 70px;
  }
`;

export const LogoWrapper = styled.div`
  width: 92.7px;
  height: 30px;

  @media (min-width: 768px) {
    width: 155px;
    height: 50px;
  }

  > span {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const LeftDesc = styled.div`
  padding-top: 14px;
  @media (min-width: 768px) {
    padding-top: 19px;
  }

  > div {
    font-family: S-CoreDream-3;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: rgb(51, 51, 51);
    white-space: pre-wrap;

    @media (min-width: 768px) {
      font-size: 50px;
      line-height: 72px;
    }
  }
`;

export const LeftSubDesc = styled.div`
  padding-top: 10px;

  @media (min-width: 768px) {
    padding-top: 20px;
  }

  > div {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 24px;
    letter-spacing: normal;
    text-align: center;
    color: rgb(51, 51, 51);
    white-space: pre-wrap;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 32px;
    }
  }
`;

export const TicketRight = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-pack: center;
  z-index: 2;

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 70px;
    margin-left: 10px;
  }
  @media (min-width: 900px) {
    margin-bottom: 70px;
    margin-left: 80px;
  }
  @media (min-width: 994px) {
    margin-bottom: 70px;
    margin-left: 60px;
  }
  @media (min-width: 1088px) {
    margin-bottom: 70px;
    margin-left: 90px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 70px;
    margin-left: 135px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 5px;

  @media (min-width: 768px) {
    margin-left: 0px;
  }
`;

export const ButtonLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    margin-top: -1px !important;
    width: 10px !important;
    height: 8px !important;
    opacity: 0.7 !important;
  }
`;

export const LabelText = styled.div`
  display: flex;
  white-space: pre-wrap;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgb(255, 255, 255);
  padding: 6px 10px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 24px;
    padding: 10px 15px;
  }

  > div {
    display: flex;
    flex-direction: row;
    white-space: pre-wrap;
    margin-bottom: auto;
  }

  > div > div {
    color: rgb(255, 255, 255);
  }
`;

export const DownloadButton = styled.div`
  background-color: rgb(51, 51, 51);
  width: auto;
  padding: 11px 67.5px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 19px 40px;
  }

  > span {
    width: 24px !important;
    height: 24px !important;
  }

  > div {
    margin-left: 15px;
  }

  > div > div {
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 32px;
    letter-spacing: normal;
    text-align: center;
    color: rgb(255, 255, 255);
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 32px;
    }
  }
`;

export default DownloadSection;
