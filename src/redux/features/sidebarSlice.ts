import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SidebarState = {
  isSidebarOpen: boolean;
};

const initialState = {
  isSidebarOpen: false,
} as SidebarState;

export const sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebar.actions;

export default sidebar.reducer;
