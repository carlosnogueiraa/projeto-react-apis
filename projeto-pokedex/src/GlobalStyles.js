import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins;
    }

    button{
        cursor: pointer;
    }

    body{
        background-color: #5e5e5e;
    }
`

export default GlobalStyles