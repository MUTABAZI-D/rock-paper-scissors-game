import { RootState } from "./Store";
export const compChoiceSelector = (state: RootState) =>
  state.gameReducer.computerChoice;
