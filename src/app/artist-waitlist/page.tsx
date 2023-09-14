"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { handleOpenArtistWaitlistModal } from "@/redux/features/modalSlice";

const ArtistWaitlist = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(handleOpenArtistWaitlistModal());
  }, []);
  return <></>;
};

export default ArtistWaitlist;
