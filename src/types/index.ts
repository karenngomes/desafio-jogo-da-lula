export interface PlayerType {
  id: number;
  fullName: string;
  prize: number;
  voteToEndGame: boolean;
}

export interface GameType {
  round: number;
  remainingPlayers: PlayerType[];
  eliminatedPlayers: PlayerType[];
  totalPrize: number;
  votesToEndGame: number;
  isLoading: boolean;
  isEndGame: boolean;
  initGame: () => void;
  nextRound: () => void;
  restartGame: () => void;
}

export interface GameState {
  round: number;
  remainingPlayers: PlayerType[];
  eliminatedPlayers: PlayerType[];
  totalPrize: number;
  votesToEndGame: number;
}