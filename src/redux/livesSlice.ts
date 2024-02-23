import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 8;

const livesSlice = createSlice({
   name: "Lives slice",
   initialState,
   reducers: {
      decrementLives: (state) => state - 1,
      resetLives: (state) => {
         state = 8;
         return state;
      },
      incrementLives: (state) => state + 1,
   },
});

export const { decrementLives, incrementLives, resetLives } =
   livesSlice.actions;

export default livesSlice.reducer;
