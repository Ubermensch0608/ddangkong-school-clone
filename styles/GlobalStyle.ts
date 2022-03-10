import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        color: #333333;
    }

    div, span{
        position: relative;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img{
        image-rendering: -webkit-optimize-contrast;
        backface-visibility: hidden;
    }
`;

export default GlobalStyle;
