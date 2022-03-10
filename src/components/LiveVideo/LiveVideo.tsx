import React from "react";
import Image from "next/image";

import TabletBodyImage from "/public/assets/tablet-body.png";
import TabletBodyImageMiddle from "/public/assets/tablet-body-middle.png";
import TabletBodyImageSmall from "/public/assets/tablet-body-small.png";
import { SectionWrapper } from "../Layout/SectionWrapper";
import LiveVideoDesc from "./LiveVideoDesc";

import styled from "styled-components";

const LiveVideo = () => {
  const VIDEO_INTERNAL_URL = "/assets/video/main-video.mp4";

  return (
    <SectionWrapper>
      <LiveVideoSection>
        <LiveVideoContents>
          <LiveVideoDesc />

          <TabletVideoContent>
            <Image
              src={TabletBodyImage}
              alt="tablet-body"
              layout="responsive"
            />

            <VideoHolder>
              <Video loop playsInline muted autoPlay>
                <source src={VIDEO_INTERNAL_URL} type="video/mp4" />
              </Video>
            </VideoHolder>
          </TabletVideoContent>
        </LiveVideoContents>
      </LiveVideoSection>
    </SectionWrapper>
  );
};

export const LiveVideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;

  height: 628px;
  width: 100%;
  overflow-x: hidden;
  background-image: url("/assets/live-video-backgorund.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(255, 255, 255);

  @media (min-width: 768px) {
    height: 1042px;
  }

  @media (min-width: 1200px) {
    height: 938px;
  }
`;

export const LiveVideoContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 0 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 30px;
    margin: 0px auto;
  }
`;

export const TabletVideoContent = styled.div`
  position: absolute;
  width: 360px;
  height: 345px;
  top: 233px;

  @media (min-width: 768px) {
    top: 340px;
    width: 768px;
    height: 662px;
  }

  @media (min-width: 1200px) {
    top: 31px;
    right: -251px;
    width: 1118px;
    height: 880px;
  }

  img {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }
`;

export const VideoHolder = styled.div`
  position: absolute;
  width: 304px;
  height: 228px;
  left: 28px;
  top: 60px;

  @media (min-width: 768px) {
    width: 620px;
    height: 497px;
    left: 75px;
    top: 81px;
  }

  @media (min-width: 1200px) {
    position: absolute;
    width: 866px;
    height: 650px;
    left: 125px;
    top: 113px;
    border-radius: 15px;
  }
`;

export const Video = styled.video`
  object-fit: fill;
  width: 304px;
  height: 228px;
  border-radius: 6px;

  @media (min-width: 768px) {
    width: 620px;
    height: 497px;
    border-radius: 8px;
  }

  @media (min-width: 1200px) {
    width: 867px;
    height: 651px;
    border-radius: 15px;
  }
`;

export default LiveVideo;
