import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import AppRoutes from "./routes";
// Hooks
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
