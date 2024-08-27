import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";

const Store = configureStore({
  reducer: {
    gameReducer: gameSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
