"use client";

import { freezeBody } from "@/app/utils/freezeBody";
import { start } from "@/redux/features/appSlice";
import {
  handleCloseArtistWaitlistModal,
  handleCloseArtistWaitlistSuccessModal,
  handleCloseJoinOurCommunityModal,
} from "@/redux/features/modalSlice";
import { closeSidebar, openSidebar } from "@/redux/features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ArtistWaitlistPopup from "../Popups/ArtistWaitlistPopup/ArtistWaitlistPopup";
import JoinOurCommunityPopup from "../Popups/JoinOurCommunityPopup/JoinOurCommunityPopup";
import SuccessFormPopup from "../Popups/SuccessFormPopup/SuccessFormPopup";
import Sidebar from "../Sidebar/Sidebar";
import HamburgerIcon from "../svgs/HamburgerIcon";
import LogoIcon from "../svgs/LogoIcon";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const openArtistWaitlistModal = useAppSelector(
    (state) => state.modalReducer.openArtistWaitlistModal
  );
  const openArtistWaitlistSuccessModal = useAppSelector(
    (state) => state.modalReducer.openArtistWaitlistSuccessModal
  );
  const openJoinOurCommunityModal = useAppSelector(
    (state) => state.modalReducer.openJoinOurCommunityModal
  );
  const pathname = usePathname();

  useEffect(() => {
    freezeBody(pathname);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <div
          className={`logoIcon ${styles.logoIcon}`}
          onClick={() => dispatch(start())}
        >
          <Link href="/">
            <LogoIcon />
          </Link>
        </div>
        <div
          className={`hamburgerIcon ${styles.hamburgerIcon}`}
          onClick={() => dispatch(openSidebar())}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Sidebar close={() => dispatch(closeSidebar())} />
      </header>
      <Modal
        isOpen={openArtistWaitlistModal}
        setIsOpen={() => {
          dispatch(handleCloseArtistWaitlistModal());
          router.push("/");
        }}
        title="Artist waitlist"
      >
        <ArtistWaitlistPopup
          close={() => {
            dispatch(handleCloseArtistWaitlistModal());
            router.push("/");
          }}
        />
      </Modal>
      <Modal
        isOpen={openArtistWaitlistSuccessModal}
        setIsOpen={() => dispatch(handleCloseArtistWaitlistSuccessModal())}
      >
        <SuccessFormPopup
          close={() => dispatch(handleCloseArtistWaitlistSuccessModal())}
        />
      </Modal>
      <Modal
        isOpen={openJoinOurCommunityModal}
        setIsOpen={() => dispatch(handleCloseJoinOurCommunityModal())}
        title="Join our community"
      >
        <JoinOurCommunityPopup />
      </Modal>
    </>
  );
};

export default Header;
