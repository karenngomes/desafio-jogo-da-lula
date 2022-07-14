import React, { Context, createContext, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { getTheme } from "theme";
import {
  getThemeColorMode,
  setThemeColorMode,
} from "services/localStorageService";

interface ThemeColorModeContextType {
  toggleTheme: () => void;
  isLight: boolean;
}

const ThemeColorModeContext: Context<ThemeColorModeContextType> = createContext(
  {} as ThemeColorModeContextType
);

const ThemeColorModeProvider: React.FC = ({ children }) => {
  const [name, setName] = useState(getThemeColorMode);
  const theme = getTheme(name);
  const isLight = name === "light";

  const toggleTheme = () => (isLight ? setName("dark") : setName("light"));

  useEffect(() => {
    setThemeColorMode(name);
  }, [name]);

  return (
    <ThemeColorModeContext.Provider
      value={{
        toggleTheme,
        isLight,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeColorModeContext.Provider>
  );
};

export { ThemeColorModeProvider, ThemeColorModeContext };
