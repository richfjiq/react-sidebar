import { createGlobalStyle } from 'styled-components';

export type ThemeType = {
  bg: string;
  bgAlpha: string;
  bg2: string;
  bg3: string;
  text: string;
  primary: string;
};

export type GlobalThemeProps = {
  theme: ThemeType;
  isActive?: string;
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: GlobalThemeProps) => theme.bg2};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.6px;
  }
`;
