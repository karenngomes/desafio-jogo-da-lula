import React, { Context, createContext, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { SQUID_GAME_COLOR_MODE_KEY } from "helpers/constants";
import { getTheme } from "theme";

interface ThemeColorModeContextType {
  toggleTheme: () => void;
  isLight: boolean;
}

const ThemeColorModeContext: Context<ThemeColorModeContextType> = createContext(
  {} as ThemeColorModeContextType
);

const ThemeColorModeProvider: React.FC = ({ children }) => {
  const [name, setName] = useState(
    localStorage.getItem(SQUID_GAME_COLOR_MODE_KEY) || "dark"
  );
  const theme = getTheme(name);
  const isLight = name === "light";

  const toggleTheme = () => (isLight ? setName("dark") : setName("light"));

  useEffect(() => {
    localStorage.setItem(SQUID_GAME_COLOR_MODE_KEY, name);
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
