import { useOutsideClick } from "@/app/utils/useOutsideClick";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import CloseIcon from "../svgs/CloseIcon";
import DiscordIcon from "../svgs/DiscordIcon";
import TelegramIcon from "../svgs/TelegramIcon";
import TwitterIcon from "../svgs/TwitterIcon";
import styles from "./Sidebar.module.scss";
import EtherMailIcon from "../svgs/EtherMailIcon";

interface ISidebar {
  close: () => void;
}

const Sidebar = ({ close }: ISidebar) => {
  const isSidebarOpen = useAppSelector(
    (state) => state.sidebarReducer.isSidebarOpen
  );

  const ref = useOutsideClick(() => {
    close();
  });

  return (
    <>
      <aside
        ref={ref}
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.show : styles.hide
        }`}
      >
        <div className={styles.closeIcon} onClick={() => close()}>
          <CloseIcon />
        </div>
        <ul className={styles.menu}>
          <li>
            <Link href="/manifesto" onClick={close}>
              Manifesto
            </Link>
          </li>
          <li>
            <Link
              href="https://docs.aimagine.wtf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Whitepaper
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={close}>
              faq
            </Link>
          </li>
          <li>
            <Link href="/artist-waitlist" onClick={close}>
              artist waitlist
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/AimagineNFT"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://discord.gg/aimagine"
              rel="noopener noreferrer"
              target="_blank"
            >
              <DiscordIcon />
            </Link>
            <Link
              href="https://t.me/aimagineofficial"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TelegramIcon />
            </Link>
            <Link
              href="https://ethermail.io/community/aimagine"
              rel="noopener noreferrer"
              target="_blank"
            >
              <EtherMailIcon />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
