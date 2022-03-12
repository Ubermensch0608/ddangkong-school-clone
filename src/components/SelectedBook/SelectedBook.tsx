import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FadeInContent } from "../BookCarousel/BookDescription";
import { SectionWrapper } from "../Layout/SectionWrapper";
import Book1 from "/public/assets/book-1.png";
import Book2 from "/public/assets/book-2.png";
import Book3 from "/public/assets/book-3.png";
import CheckIcon1 from "/public/assets/gif/check-1.gif";
import CheckIcon2 from "/public/assets/gif/check-2.gif";
import CheckIcon3 from "/public/assets/gif/check-3.gif";

const SelectedBook = () => {
  return (
    <SectionWrapper>
      <SelectedBookSection>
        <SelectedBookInnerContents>
          <DescContent>
            <div>
              <FadeInContent>
                <div>
                  <TitleDesc>교육 전문가들이 선정한 도서</TitleDesc>
                </div>
              </FadeInContent>
            </div>
            <div>
              <FadeInContent>
                <div>
                  <SubDesc>
                    호두랩스의 교육 전문가들이 교과 수록, 초등 필독 도서 등 아동
                    교육에 적합한 도서를 직접 선정해요!
                  </SubDesc>
                </div>
              </FadeInContent>
            </div>
          </DescContent>

          <SelectedBookContent>
            <Book>
              <Check>
                <Image src={CheckIcon1} alt="check-1" />
              </Check>
              <Image src={Book1} alt="book-1" />
            </Book>
            <Book>
              <Check>
                <Image src={CheckIcon2} alt="check-2" />
              </Check>
              <Image src={Book2} alt="book-2" />
            </Book>
            <Book>
              <Check>
                <Image src={CheckIcon3} alt="check-3" />
              </Check>
              <Image src={Book3} alt="book-3" />
            </Book>
          </SelectedBookContent>
        </SelectedBookInnerContents>
      </SelectedBookSection>
    </SectionWrapper>
  );
};

const SelectedBookSection = styled(SectionWrapper)`
  background-color: rgb(249, 249, 249);
`;

const SelectedBookInnerContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 100%;
  margin: 100px 0;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 768px;
    margin: 150px 0;
    padding: 0 30px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    margin: 150px 0;
    padding: 0 20px;

    width: 100%;
    max-width: 1290px;
  }
`;

export const DescContent = styled.div``;

const TitleDesc = styled.div`
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 1.4;
  }

  @media (min-width: 1200px) {
    font-size: 50px;
    line-height: 1.4;
    text-align: left;
  }
`;

export const SubDesc = styled.div`
  margin-top: 50px;
  white-space: pre-wrap;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.67;
    text-align: center;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 1.67;
    text-align: left;
  }
`;

export const SelectedBookContent = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  justify-content: center;
  margin-left: 0px;
  margin-top: 64px;

  @media (min-width: 768px) {
    margin-left: 0px;
    margin-top: 100px;

    font-size: 24px;
    line-height: 1.67;
    text-align: center;
  }

  @media (min-width: 1200px) {
    margin-left: 156px;
    margin-top: 0px;

    font-size: 24px;
    line-height: 1.67;
    text-align: left;
  }
`;

export const Book = styled.div`
  display: flex;
  margin-right: 100px;
  flex-direction: column;
  justify-content: center;

  > span {
    width: 87px !important;
    height: 116px !important;
    margin-top: 15px !important;
    filter: drop-shadow(rgba(0, 0, 0, 0.1) 10px 10px 10px) !important;

    @media (min-width: 768px) {
      width: 150px !important;
      height: 200px !important;
    }
    @media (min-width: 1200px) {
      width: 150px !important;
      height: 200px !important;
    }
  }
`;

export const Check = styled.div`
  width: 87px;
  height: 58px;

  @media (min-width: 1200px) {
    width: 150px;
    height: 100px;
  }
  @media (min-width: 768px) {
    width: 150px;
    height: 100px;
  }

  > span {
    display: block !important;

    @media (min-width: 768px) {
      width: 150px !important;
      height: 100px !important;
    }

    @media (min-width: 1200px) {
      width: 150px !important;
      height: 100px !important;
    }
  }
`;

export default SelectedBook;
