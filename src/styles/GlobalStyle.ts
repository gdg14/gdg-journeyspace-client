import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;

        margin: 0;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
