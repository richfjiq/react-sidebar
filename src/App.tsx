import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import { darkTheme, GlobalStyle, lightTheme } from './styles';
import { Layout } from './components';
import Routes from './Routes';

type Theme = 'light' | 'dark';

export type ThemeContextType = {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const App = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar - Testing</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <Layout>
            <Routes />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
