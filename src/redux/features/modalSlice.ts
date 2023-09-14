import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  openArtistWaitlistModal: boolean;
  openArtistWaitlistSuccessModal: boolean;
  openJoinOurCommunityModal: boolean;
};

const initialState = {
  openArtistWaitlistModal: false,
  openArtistWaitlistSuccessModal: false,
  openJoinOurCommunityModal: false,
} as ModalState;

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleOpenArtistWaitlistModal: (state) => {
      state.openArtistWaitlistModal = true;
    },
    handleCloseArtistWaitlistModal: (state) => {
      state.openArtistWaitlistModal = false;
    },
    handleOpenArtistWaitlistSuccessModal: (state) => {
      state.openArtistWaitlistSuccessModal = true;
    },
    handleCloseArtistWaitlistSuccessModal: (state) => {
      state.openArtistWaitlistSuccessModal = false;
    },
    handleOpenJoinOurCommunityModal: (state) => {
      state.openJoinOurCommunityModal = true;
    },
    handleCloseJoinOurCommunityModal: (state) => {
      state.openJoinOurCommunityModal = false;
    },
  },
});

export const {
  handleOpenArtistWaitlistModal,
  handleCloseArtistWaitlistModal,
  handleOpenArtistWaitlistSuccessModal,
  handleCloseArtistWaitlistSuccessModal,
  handleOpenJoinOurCommunityModal,
  handleCloseJoinOurCommunityModal,
} = modal.actions;

export default modal.reducer;
