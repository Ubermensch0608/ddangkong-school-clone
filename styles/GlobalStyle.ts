import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    color: #333333;
    }

    html,
    body {
    padding: 0;
    margin: 0;
    }

    a {
    color: inherit;
    text-decoration: none;
    }
`;

export default GlobalStyle;
