import styled from "@emotion/styled";
import { Switch } from "./Switch";

export const Header = ({
  toggleTheme,
  isLight,
}: {
  toggleTheme: () => void;
  isLight: boolean;
}) => {
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
