import {
  SQUID_GAME_COLOR_MODE_KEY,
  SQUID_GAME_DATA_KEY,
} from "utils/constants";

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

export const getThemeColorMode = () =>
  localStorage.getItem(SQUID_GAME_COLOR_MODE_KEY) || "dark";

export const setThemeColorMode = (mode: string) => {
  localStorage.setItem(SQUID_GAME_COLOR_MODE_KEY, mode);
};
