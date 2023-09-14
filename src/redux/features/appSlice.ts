import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  startFromScratch: boolean;
};

const initialState = {
  startFromScratch: true,
} as AppState;

export const app = createSlice({
  name: "App",
  initialState,
  reducers: {
    start: (state) => {
      state.startFromScratch = true;
    },
    end: (state) => {
      state.startFromScratch = false;
    },
  },
});

export const { start, end } = app.actions;

export default app.reducer;
