import React from "react";
import DiscordIcon from "../../svgs/DiscordIcon";
import TelegramIcon from "../../svgs/TelegramIcon";
import TwitterIcon from "../../svgs/TwitterIcon";
import styles from "./JoinOurCommunityPopup.module.scss";
import Link from "next/link";

const JoinOurCommunityPopup = () => {
  return (
    <div className={styles.joinOurCommunityPopup}>
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
    </div>
  );
};

export default JoinOurCommunityPopup;
