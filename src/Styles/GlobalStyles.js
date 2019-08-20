import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }
    body {
        width: 100vw;
        height: 100vh;
    }
`;
