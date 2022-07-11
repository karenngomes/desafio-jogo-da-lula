import styled from "@emotion/styled";
import { Button } from "components/Button";

export const GamePage = () => {
  return (
    <GameComponent>
      <h3>Round: 2</h3>
      <h3>Fundo do prêmio: $20,1600.00</h3>

      <GameSections>
        <section>
          <h3>Jogadores Remanescentes</h3>

          <ul>
            {[...Array(3)].map((_, i) => (
              <li key={i}>Karen Gomes</li>
            ))}
          </ul>
        </section>

        <MainSection>
          <div className="main-info">
            <p>Total de Jogadores Remanescentes: 21</p>
            <p>Total de Jogadores Eliminados: 48</p>
            <p>Votos para o fm do jogo: 12</p>
            <p>Prêmio para cada jogador remanescente: $960,000.0</p>
          </div>

          <div className="additional-info">
            <img src="assets/squid-game-soldier.png" alt="Squid Game Soldier" />
            <p>Votos para fim de jogo: 12</p>

            <Button>Iniciar Rodada</Button>
          </div>
        </MainSection>

        <section>
          <h3>Jogadores Eliminados</h3>

          <ul>
            {[...Array(30)].map((_, i) => (
              <li key={i}>Karen Gomes</li>
            ))}
          </ul>
        </section>
      </GameSections>
    </GameComponent>
  );
};

const GameComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 1440px;
  margin: auto;

  h3 {
    font-size: 1.5rem;
  }
`;

const GameSections = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;

  section {
    flex-grow: 1;
    flex-basis: 300px;
    margin: 10px 35px;
    text-align: center;

    ul {
      list-style-position: inside;
      padding: 0;
      display: flex;
      max-height: 60vh;
      flex-flow: column wrap;

      li {
        padding: 2px;
      }
    }
  }
`;

const MainSection = styled.section`
  div.main-info {
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    margin-bottom: 30px;
    padding: 10px;
  }

  div.additional-info {
    p {
      font-size: 1.5rem;
    }
  }
`;
