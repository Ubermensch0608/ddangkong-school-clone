import { Fragment } from "react";
import type { AppProps } from "next/app";

import GlobalStyle from "../../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
