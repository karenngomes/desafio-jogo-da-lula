import { createContext, useCallback, useContext, useState } from "react";

import { URL_FAKER_NAMES } from "helpers/constants";
import {
  calculateTotalPrize,
  calculateVotesToEndGame,
  endGame,
  getDataLocalStorage,
  setDataLocalStorage,
} from "services/utils";
import { GameState, GameType, PlayerType } from "types/index";

const GameContext = createContext<GameType>({} as GameType);

// eslint-disable-next-line react/prop-types
const GameProvider: React.FC = ({ children }): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEndGame, setIsEndGame] = useState<boolean>(false);

  const [data, setData] = useState<GameState>(() => {
    const dataLocalStorage = getDataLocalStorage();
    if (dataLocalStorage) {
      const remainingPlayers =
        JSON.parse(dataLocalStorage)?.remainingPlayers || [];

      const eliminatedPlayers =
        JSON.parse(dataLocalStorage)?.eliminatedPlayers || [];

      const totalPrize = calculateTotalPrize(
        remainingPlayers,
        JSON.parse(dataLocalStorage)?.totalPrize
      );

      const votesToEndGame = calculateVotesToEndGame(remainingPlayers);

      const round = JSON.parse(dataLocalStorage)?.round || 0;

      return {
        remainingPlayers,
        eliminatedPlayers,
        round,
        totalPrize,
        votesToEndGame,
        // ...JSON.parse(dataLocalStorage),
      } as GameType;
    }

    return {} as GameType;
  });

  const initGame = useCallback(() => {
    setIsLoading(true);
    fetch(URL_FAKER_NAMES)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(({ data }) => {
        const players = data.map((player) => {
          return {
            id: player.uuid,
            fullName: `${player.firstname} ${player.lastname}`,
            prize: 420000,
            voteToEndGame: false,
          };
        });

        const newData = {
          remainingPlayers: players,
          eliminatedPlayers: [],
          round: 1,
          totalPrize: 0,
          votesToEndGame: 0,
        };
        setDataLocalStorage(JSON.stringify(newData));
        setData({ ...newData, ...data });
      })
      .catch((error: Response) => console.error(error.statusText))
      .finally(() => setIsLoading(false));
  }, []);

  const nextRound = () => {
    console.log("nextRound");
    if (data.remainingPlayers) {
      const newEliminatedPlayers = [] as PlayerType[];
      const newRemainingPlayers = data.remainingPlayers
        .filter((currentPlayer) => {
          const probabilityToBeEliminated = Math.random();
          if (probabilityToBeEliminated >= 0.42) {
            return true;
          }
          newEliminatedPlayers.push(currentPlayer);
          return false;
        })
        .map((currentPlayer) => {
          const probabilityToVoteToEndGame = Math.random();
          return {
            ...currentPlayer,
            voteToEndGame: probabilityToVoteToEndGame <= 0.3,
          };
        });

      const newTotalPrize = calculateTotalPrize(
        newEliminatedPlayers,
        data.totalPrize
      );

      const newData: GameState = {
        remainingPlayers: newRemainingPlayers,
        eliminatedPlayers: [...data.eliminatedPlayers, ...newEliminatedPlayers],
        votesToEndGame: calculateVotesToEndGame(newRemainingPlayers),
        round: data.round + 1,
        totalPrize: newTotalPrize,
      };

      if (
        !newData.remainingPlayers.length ||
        newData.votesToEndGame > newData.remainingPlayers.length / 2
      ) {
        setIsEndGame(true);
      }
      setData({
        ...newData,
      } as GameType);

      setDataLocalStorage(
        JSON.stringify({
          ...newData,
        })
      );
    }
  };

  const finishGame = useCallback(() => {
    endGame();
    window.location.reload();

    setData({} as GameType);
  }, []);

  return (
    <GameContext.Provider
      value={{
        eliminatedPlayers: data.eliminatedPlayers || [],
        round: data.round || 0,
        remainingPlayers: data.remainingPlayers || [],
        allPlayers: [],
        totalPrize: data.totalPrize || 0,
        votesToEndGame: data.votesToEndGame || 0,
        initGame,
        isLoading,
        nextRound,
        isEndGame,
        finishGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

function useGame(): GameType {
  return useContext(GameContext);
}

export { GameProvider, useGame };
