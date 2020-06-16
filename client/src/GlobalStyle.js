import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *,*::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #fefefe;
        color: #3B4C7C;
        font-size: 16px;
    }
`;

export default GlobalStyle;