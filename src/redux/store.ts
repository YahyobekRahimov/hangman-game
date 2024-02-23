import { configureStore } from "@reduxjs/toolkit";
import livesSlice from "./livesSlice";
import puzzleWordSlice from "./puzzleWordSlice";

const store = configureStore({
   reducer: {
      livesSlice: livesSlice,
      puzzleWordSlice: puzzleWordSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
   console.log(store.getState().puzzleWordSlice.lettersFound);
});

export default store;
