import React from "react";
import { FadeInContent } from "../BookCarousel/BookDescription";
import { SectionWrapper } from "../Layout/SectionWrapper";
import BookClipInnerTitle from "./BookClipInnerTitle";
import BookClipIcon1 from "/public/assets/BookClip/book-clip-icon1.png";
import BookClipIcon2 from "/public/assets/BookClip/book-clip-icon2.png";
import BookClipIcon3 from "/public/assets/BookClip/book-clip-icon3.png";

import styled from "styled-components";
import Image from "next/image";

const BookClipSection = () => {
  return (
    <SectionWrapper>
      <BookClipWrapper>
        <BookClipInnerContents>
          <BookClipInnerTitle />
          <InnerBookClips>
            <div>
              <FadeInContent>
                <div>
                  <InnerBookClip>
                    <Image src={BookClipIcon1} alt="book-clip-icon__1" />
                    <InnerContentWrapper>
                      <div>화상수업</div>
                    </InnerContentWrapper>
                    <InnerContentWrapper>
                      <div>
                        휴대폰이나 태블릿으로 시간이나 장소 관계없이 편하게
                        수업을 들어보세요.
                      </div>
                    </InnerContentWrapper>
                  </InnerBookClip>
                </div>
              </FadeInContent>
            </div>
            <div>
              <FadeInContent>
                <div>
                  <InnerBookClip2>
                    <Image src={BookClipIcon2} alt="book-clip-icon__2" />
                    <InnerContentWrapper>
                      <div>양방향</div>
                    </InnerContentWrapper>
                    <InnerContentWrapper>
                      <div>
                        화면에 그림도 그려보고, 읽은 책으로 선생님과 퀴즈도
                        풀어보는 양방향 수업을 경험해보세요.
                      </div>
                    </InnerContentWrapper>
                  </InnerBookClip2>
                </div>
              </FadeInContent>
            </div>
            <div>
              <FadeInContent>
                <div>
                  <InnerBookClip3>
                    <Image src={BookClipIcon3} alt="book-clip-icon__3" />
                    <InnerContentWrapper>
                      <div>캐릭터</div>
                    </InnerContentWrapper>
                    <InnerContentWrapper>
                      <div>
                        친숙한 캐릭터와 목소리로 수업에 대한 부담을 낮춰보세요.
                      </div>
                    </InnerContentWrapper>
                  </InnerBookClip3>
                </div>
              </FadeInContent>
            </div>
          </InnerBookClips>
        </BookClipInnerContents>
      </BookClipWrapper>
    </SectionWrapper>
  );
};

export const BookClipWrapper = styled(SectionWrapper)`
  background-color: rgb(249, 249, 249);
  overflow: hidden;
  margin-bottom: -75px;
`;

export const BookClipInnerContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 150px;

  @media (min-width: 768px) {
    max-width: 1200px;
    padding: 0 30px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 30px;
  }
`;

export const InnerBookClips = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 65px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 101px;
  }

  @media (min-width: 1200px) {
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    width: 1380px;
    margin-top: 80px;
    margin-bottom: 0px;
  }
`;

export const InnerBookClip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: 500px 643px;
  background-image: url("/assets/BookClip/book-clip.png");
  background-position: center 0px;
  background-repeat: no-repeat;
  width: 460px;
  height: 414px;
  margin-right: -100px;

  @media (min-width: 768px) {
    width: 600px;
    height: 632px;
  }
  @media (min-width: 1200px) {
    width: 500px;
    height: 643px;
  }

  > span {
    width: 60px !important;
    height: 60px !important;
    margin-top: 130px !important;

    @media (min-width: 768px) {
      width: 80px !important;
      height: 80px !important;
      margin-top: 205px !important;
    }

    @media (min-width: 1200px) {
      width: 80px !important;
      height: 80px !important;
      margin-top: 200px !important;
    }
  }

  > div {
    &:nth-child(2) {
      margin-top: 50px;

      > div {
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: rgb(51, 51, 51);

        @media (min-width: 768px) {
          font-size: 30px;
        }

        @media (min-width: 1200px) {
          font-size: 30px;
        }
      }
    }
    &:nth-child(3) {
      margin-top: 30px;

      > div {
        white-space: pre-wrap;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
        text-align: center;
        color: rgb(51, 51, 51);

        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 1.8;
        }
        @media (min-width: 1200px) {
          font-size: 20px;
          line-height: 1.8;
          max-width: 214px;
        }
      }
    }
  }
`;

export const InnerContentWrapper = styled.div`
  margin: 0px auto;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
  @media (min-width: 1200px) {
    margin-top: 30px;
  }
`;

export const InnerBookClip2 = styled(InnerBookClip)`
  background-image: url("/assets/BookClip/book-clip2.png");
`;

export const InnerBookClip3 = styled(InnerBookClip)`
  background-image: url("/assets/BookClip/book-clip3.png");
`;

export default BookClipSection;
