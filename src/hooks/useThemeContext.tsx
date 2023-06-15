import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  console.log(context.theme);

  if (!context) {
    console.log("ThemeContext not found!");
  }

  return context;
};
