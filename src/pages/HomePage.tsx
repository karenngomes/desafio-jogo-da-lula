import styled from "@emotion/styled";
import { Button } from "components/Button";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <HomeContainer>
      <img src="assets/squid-game-logo.png" alt="Squid Game Logo" />
      <h2>Jogo da Lula</h2>
      <Link to="/game">
        <Button>Continuar</Button>
      </Link>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  img {
    max-width: min(90vw, 25rem);
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
  }
`;
