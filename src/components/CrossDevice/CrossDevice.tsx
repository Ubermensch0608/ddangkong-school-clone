import Image from "next/image";

import { SectionWrapper } from "../Layout/SectionWrapper";
import CrossDeviceDescInner, { DescInner } from "./CrossDeviceDescInner";
import MainImage from "/public/assets/cross-device-main.png";
import ChildImage from "/public/assets/cross-device-child.png";
import RightPlant from "/public/assets/cross-device-right-green.png";
import LeftPlant from "/public/assets/cross-device-left-plant.png";

import styled from "styled-components";

const CrossDevice = () => {
  return (
    <SectionWrapper>
      <CrossDeviceSection>
        <CrossDeviceInner>
          <CrossDeviceDescInner />
          <DeviceInner>
            <Image src={MainImage} alt="cross-device__main-device" />
            <Image src={LeftPlant} alt="cross-device__left-plant" />
            <Image src={RightPlant} alt="cross-device__right-plant" />
            <Image src={ChildImage} alt="cross-device__child" />
          </DeviceInner>
        </CrossDeviceInner>
      </CrossDeviceSection>
    </SectionWrapper>
  );
};

export const CrossDeviceSection = styled(SectionWrapper)`
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
`;

export const CrossDeviceInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 100px 20px 0 20px;
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 768px;
    padding: 150px 30px 0 30px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1200px;
    padding: 150px 30px 0 30px;
    margin: 0px auto;
  }
`;

export const DeviceInner = styled(DescInner)`
  margin-bottom: 83px;

  @media (min-width: 768px) {
    margin-bottom: 112px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 97px;
  }

  > span {
    :nth-child(1) {
      width: 320px !important;
      z-index: 1 !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      top: 60px !important;
      flex-direction: row !important;
      position: relative !important;
      margin-bottom: 100px !important;

      @media (min-width: 768px) {
        width: 708px !important;
        top: 100px !important;
      }
      @media (min-width: 1200px) {
        width: 1200px !important;
        top: 100px !important;
        left: 53% !important;
      }
    }
    :nth-child(2) {
      position: absolute !important;
      left: -25px !important;
      top: -50px !important;
      width: 140px !important;

      @media (min-width: 768px) {
        width: 205px !important;
        left: -20px !important;
        top: -68px !important;
      }

      @media (min-width: 1200px) {
        width: 387px !important;
        left: -64px !important;
        top: -167px !important;
      }
    }
    :nth-child(3) {
      position: absolute !important;
      right: 5px !important;
      top: -20px !important;
      width: 120px !important;

      @media (min-width: 768px) {
        width: 218px !important;
        right: 10px !important;
        top: -30px !important;
      }

      @media (min-width: 1200px) {
        width: 401px !important;
        right: -55px !important;
        top: -156px !important;
      }
    }

    :nth-child(4) {
      position: absolute !important;
      right: 28px !important;
      top: 22px !important;
      width: 73px !important;
      height: 89px !important;
      z-index: 1 !important;

      @media (min-width: 768px) {
        width: 154px !important;
        height: 187px !important;
        right: 32px !important;
        top: 25px !important;
      }

      @media (min-width: 1200px) {
        width: 244px !important;
        height: 296px !important;
        right: 21px !important;
        top: -18px !important;
      }
    }
  }
`;

export default CrossDevice;
