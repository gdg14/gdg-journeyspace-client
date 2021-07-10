import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    .nanumsquare {
        font-family: 'NanumSquare', sans-serif !important;
    }

    ${reset}

    * {
        box-sizing: border-box;
        color: #333333;
        margin: 0;
        font-family: 'NanumSquare', sans-serif !important;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    input:focus { outline: none; }

    textarea:focus { outline: none; }
`;

export default GlobalStyle;
