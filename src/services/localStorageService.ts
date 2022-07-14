import { GameType } from "types";
import {
  SQUID_GAME_COLOR_MODE_KEY,
  SQUID_GAME_DATA_KEY,
} from "utils/constants";
import { calculateTotalPrize, calculateVotesToEndGame } from "utils/helpers";

export const isRunningGame = () =>
  localStorage.getItem(SQUID_GAME_DATA_KEY) !== null;

export const getDataLocalStorage = () =>
  localStorage.getItem(SQUID_GAME_DATA_KEY) || "";

export const setDataLocalStorage = (data: string) => {
  localStorage.setItem(SQUID_GAME_DATA_KEY, data);
};

export const getFormattedDataLocalStorage = () => {
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
    } as GameType;
  }

  return {} as GameType;
}

export const endGame = () => {
  localStorage.removeItem(SQUID_GAME_DATA_KEY);
};

export const getThemeColorMode = () =>
  localStorage.getItem(SQUID_GAME_COLOR_MODE_KEY) || "dark";

export const setThemeColorMode = (mode: string) => {
  localStorage.setItem(SQUID_GAME_COLOR_MODE_KEY, mode);
};
