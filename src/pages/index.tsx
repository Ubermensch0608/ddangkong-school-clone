import FullPage from "../components/FullPage";
import type { NextPage } from "next";
import styled from "styled-components";
import SLIDE_DATA from "../utils/SLIDE_DATA";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <FullPage />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Home;
