import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
    }
    body {
        background-color: #D3D3D3;
    }
    p {
        font-family: 'Montserrat';
    }
    ion-icon, button {
        cursor:pointer;
    }
`