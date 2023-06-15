import styled from "styled-components";

export const Footer = styled.footer`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.footerColor};
  color: ${(p) => p.theme.secundaryColor};
`;
