import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { gameStatus: "Menu", score: 0 };

const quizSlice = createSlice({
  name: "Quiz",
  initialState,
  reducers: {
    updateGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
    updateScore: (state) => {
      state.score = state.score + 1;
    },
    resetScore:(state) => {
        state.score = 0;
    }
  },
});

export const { updateGameStatus, updateScore, resetScore } = quizSlice.actions;

export const store = configureStore({
  reducer: {
    Quiz: quizSlice.reducer,
  },
});
