import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
   word: string;
   lettersFound: string[];
} = {
   word: "",
   lettersFound: [],
};

const puzzleWordSlice = createSlice({
   name: "puzzleWordSlice",
   initialState,
   reducers: {
      setPuzzleWord: (state, { payload }: PayloadAction<string>) => {
         state.word = payload;
      },
      addLetterFound: (state, { payload }: PayloadAction<string>) => {
         state.lettersFound.push(payload);
         return state;
      },
   },
});

export const { setPuzzleWord, addLetterFound } =
   puzzleWordSlice.actions;

export default puzzleWordSlice.reducer;
