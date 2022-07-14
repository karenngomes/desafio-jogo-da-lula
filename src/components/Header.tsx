import styled from "@emotion/styled";
import { ThemeColorModeContext } from "contexts/ThemeColorModeContext";
import { useContext } from "react";
import { Switch } from "./Switch";

export const Header = () => {
  const { isLight, toggleTheme } = useContext(ThemeColorModeContext);

  return (
    <HeaderContainer>
      <p>{isLight ? "Light Mode" : "Dark Mode"}</p>
      <Switch toggleTheme={toggleTheme} isLight={isLight} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  margin-right: 3vw;

  p {
    margin-right: 10px;
    font-weight: 600;
  }
`;
