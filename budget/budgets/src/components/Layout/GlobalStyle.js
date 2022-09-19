import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body {
    font-family: "Inter", sans-serif;
    padding: 1rem;
    border: 1px solid red;
    height: 100vh;
}
`;

export default GlobalStyle;
