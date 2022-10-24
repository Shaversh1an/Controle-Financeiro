import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }


    body {
        font-family: "inter",Sans-serif;
        background-color: gray;
    }
`;

export default Global;


// linear-gradient(to right, rgb(0,255,0), rgb(0,100,0)