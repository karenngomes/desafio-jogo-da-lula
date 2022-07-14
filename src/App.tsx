import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";

import { Header } from "components/Header";
import { HomePage } from "pages/HomePage";
import { GamePage } from "pages/GamePage";
import { GameProvider } from "contexts/GameContext";
import { ThemeColorModeProvider } from "contexts/ThemeColorModeContext";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <ThemeColorModeProvider>
      <GameProvider>
        <AppContainer>
          <React.Fragment>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </React.Fragment>
        </AppContainer>
      </GameProvider>
    </ThemeColorModeProvider>
  );
};

export default App;
