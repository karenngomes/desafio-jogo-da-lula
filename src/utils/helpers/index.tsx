import { PlayerType } from "types";

export const formattedCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value
  );

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

export const playAudio = (url) => {
  let audio = document.getElementById("new-audio") as HTMLAudioElement;
  if (audio) {
    audio.pause();
    audio.src = url;
    audio.play();
  } else {
    audio = document.createElement("audio");

    audio.id = "new-audio";
    audio.src = url;

    document.getElementById("root")?.appendChild(audio);
    audio.play();
  }
};
