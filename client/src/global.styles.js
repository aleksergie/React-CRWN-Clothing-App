import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans Condensed", sans-serif;
  padding: 20px 60px;
  background-color: rgb(253, 250, 239);

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  font-weight: bold;
  color: rgb(51, 51, 51);
}
`;
