import { createSlice } from "@reduxjs/toolkit";

type Choice = "rock" | "paper" | "scissors" | null;

export interface GameState {
  computerChoice: Choice;
}
const initialState: GameState = {
  computerChoice: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    generateComputerChoice: (state) => {
      const randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        state.computerChoice = "rock";
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        state.computerChoice = "paper";
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        state.computerChoice = "scissors";
      }
    },
  },
});

export default gameSlice.reducer;

export const { generateComputerChoice } = gameSlice.actions;
