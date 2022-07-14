import { SQUID_GAME_DATA_KEY } from "helpers/constants";
import { PlayerType } from "types/index";

export const isRunningGame = () =>
  localStorage.getItem(SQUID_GAME_DATA_KEY) !== null;

export const getDataLocalStorage = () =>
  localStorage.getItem(SQUID_GAME_DATA_KEY) || "";

export const setDataLocalStorage = (data: string) => {
  localStorage.setItem(SQUID_GAME_DATA_KEY, data);
};

export const endGame = () => {
  localStorage.removeItem(SQUID_GAME_DATA_KEY);
};

export const calculateTotalPrize = (
  players: PlayerType[],
  currentTotalPrize: number
): number =>
  players?.length
    ? players.reduce(
        (acc, currentPlayer) => acc + currentPlayer.prize,
        currentTotalPrize
      )
    : currentTotalPrize;

export const calculateVotesToEndGame = (players?: PlayerType[]): number =>
  players?.length
    ? players.reduce(
        (acc, currentPlayer) => (currentPlayer.voteToEndGame ? acc + 1 : acc),
        0
      )
    : 0;
