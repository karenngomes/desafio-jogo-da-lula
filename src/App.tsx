import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";

import { Header } from "components/Header";
import { HomePage } from "pages/HomePage";
import { GamePage } from "pages/GamePage";
import { getTheme } from "theme";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [name, setName] = useState("dark");
  const theme = getTheme(name);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <React.Fragment>
          <Header setName={setName} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </React.Fragment>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
