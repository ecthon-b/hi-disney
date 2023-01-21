import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #c1D3F4;
        -webkit-font-smoothing: antialiased;
    }

    body, button {
        font: 400 1rem Poppins, sans-serif;
    }
`;