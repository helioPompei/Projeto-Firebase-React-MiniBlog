import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        // font-family: THEME.FONTS.FAMILY.PRIMARY ;
        margin: 0px;
        padding: 0px;
    }

    body {
        background-color: ${(p) => p.theme.backgroundColor};
        padding: 0px;
        margin: 0px;
        font-family: "Montserrat", sans-serif;
    }

    input::placeholder,
    textarea::placeholder {
        font-family: "Montserrat", sans-serif;
    }

    input::focus,
    textarea::focus {
        outline: none;
    }

    a:hover,
    nav button:hover {
        color: #bbb
    }

`;

export const AppContainer = styled.div`
  min-height: 60vh;
  margin-bottom: 5em;
  color: ${(p) => p.theme.backgroundColor};
`;
