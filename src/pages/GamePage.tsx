import styled from "@emotion/styled";
import { Button } from "components/Button";
import { Loader } from "components/Loader";
import { useGame } from "contexts/GameContext";
import { formattedCurrency } from "utils/helpers";
import { isRunningGame } from "services/localStorageService";

export const GamePage = () => {
  const {
    initGame,
    remainingPlayers,
    isLoading,
    eliminatedPlayers,
    round,
    totalPrize,
    votesToEndGame,
    nextRound,
    isEndGame,
    restartGame,
  } = useGame();

  return (
    <GameComponent>
      <h3>Round: {round}</h3>
      <h3>Fundo do prêmio: {formattedCurrency(totalPrize)}</h3>

      <GameSections>
        <section>
          <h3>Jogadores Remanescentes</h3>

          {remainingPlayers.length ? (
            <ul>
              {remainingPlayers.map((player) => (
                <li key={player.id}>{player.fullName}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </section>

        <MainSection>
          {isEndGame ? (
            <div className="main-info">
              <>
                <p>
                  Total de Jogadores Remanescentes:{" "}
                  {remainingPlayers.length ? remainingPlayers?.length : 0}
                </p>
                <p>
                  Total de Jogadores Eliminados:{" "}
                  {eliminatedPlayers?.length ? eliminatedPlayers?.length : 0}
                </p>
                <p>Votos para o fim do jogo: {votesToEndGame}</p>
                <p>
                  Prêmio para cada jogador remanescente:{" "}
                  {formattedCurrency(
                    remainingPlayers?.length
                      ? totalPrize / remainingPlayers?.length + 420000
                      : 0
                  )}
                </p>
              </>
            </div>
          ) : (
            ""
          )}

          <div className="additional-info">
            <img src="assets/red-man.gif" alt="Squid Game Soldier" />
            <p>Votos para fim de jogo: {votesToEndGame}</p>

            {isRunningGame() ? (
              isEndGame ? (
                <Button onClick={restartGame}>Jogar novamente</Button>
              ) : (
                <Button onClick={nextRound}>Finalizar partida</Button>
              )
            ) : (
              <Button onClick={initGame}>
                Iniciar Rodada {isLoading && <Loader />}
              </Button>
            )}
          </div>
        </MainSection>

        <section>
          <h3>Jogadores Eliminados</h3>

          {eliminatedPlayers.length ? (
            <ul>
              {eliminatedPlayers.map((player) => (
                <li key={player.id}>{player.fullName}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
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
  flex-wrap: nowrap;

  section {
    flex-grow: 1;
    flex-basis: 300px;
    margin: 10px 35px;
    text-align: center;

    ul {
      list-style-position: inside;
      padding: 0;
      display: flex;
      max-height: 900px;
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
