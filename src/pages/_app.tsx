import { Fragment } from "react";
import type { AppProps } from "next/app";

import Header from "../components/Layout/Header";
import GlobalStyle from "../../styles/GlobalStyle";
import styled from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <Component {...pageProps} />
      </PageWrapper>
    </Fragment>
  );
}

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-self: center;
  overflow: hidden;
`;

export default MyApp;
