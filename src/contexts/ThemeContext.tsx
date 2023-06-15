import { createContext, useState } from "react";
import { lightTheme } from "../styles/themes";

interface ThemeContextProps {
  theme: object;
  setTheme: any;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
