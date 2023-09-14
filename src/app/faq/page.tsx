"use client";

import React, { useEffect, useState } from "react";
import FaqLogoIcon from "../components/svgs/FaqLogoIcon";
import UserIcon from "../components/svgs/UserIcon";
import { IFaq } from "../types/faq";
import FaqMobile from "./faq-mobile/faq-mobile";
import styles from "./faq-page.module.scss";
import { questionsData } from "./faq-questions-data";
import Button from "../components/Button/Button";
import { useAppDispatch } from "@/redux/hooks";
import { handleOpenArtistWaitlistModal } from "@/redux/features/modalSlice";
import Link from "next/link";
import TwitterIcon from "../components/svgs/TwitterIcon";
import DiscordIcon from "../components/svgs/DiscordIcon";
import TelegramIcon from "../components/svgs/TelegramIcon";

const Faq = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [active, setActive] = useState(1);
  const [showLearnMoreBtn, setShowLearnMoreBtn] = useState(false);
  const [artistWaitlistBtn, setArtistWaitlistBtn] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const handleTabClick = (item: IFaq, index: number) => {
    setShowLearnMoreBtn(false);
    setArtistWaitlistBtn(false);
    setShowSocialLinks(false);
    setTitle(item.title);
    setActive(item.id);
    setSelectedTabIndex(index);
    if (index === 7) {
      setTimeout(() => {
        setShowLearnMoreBtn(true);
      }, 5500);
    }
    if (index === 11) {
      setTimeout(() => {
        setArtistWaitlistBtn(true);
      }, 18500);
    }
    if (index === 12) {
      setTimeout(() => {
        setShowSocialLinks(true);
      }, 20000);
    }
  };

  useEffect(() => {
    setTitle(questionsData[0].title);
  }, []);

  return (
    <div className={styles.page}>
      <div className={`container ${styles.faq}`}>
        <div className={styles.questions}>
          {questionsData.map((item, index) => {
            return (
              <div
                className={`${active == item.id && "active"}`}
                key={item.id}
                onClick={() => handleTabClick(item, index)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className={styles.answers}>
          <div className={styles.answer_header}>
            <div className={styles.user_icon}>
              <UserIcon />
            </div>
            <span>{title}</span>
          </div>
          <div className={styles.answers_body}>
            <div className={styles.logo_icon}>
              <FaqLogoIcon />
            </div>
            {selectedTabIndex === 0 && (
              <div className={`${styles.description} ${styles.answer1}`}></div>
            )}
            {selectedTabIndex === 1 && (
              <div className={`${styles.description} ${styles.answer2}`}></div>
            )}
            {selectedTabIndex === 2 && (
              <div className={`${styles.description} ${styles.answer3}`}></div>
            )}
            {selectedTabIndex === 3 && (
              <div className={`${styles.description} ${styles.answer4}`}></div>
            )}
            {selectedTabIndex === 4 && (
              <div className={`${styles.description} ${styles.answer5}`}></div>
            )}
            {selectedTabIndex === 5 && (
              <div className={`${styles.description} ${styles.answer6}`}></div>
            )}
            {selectedTabIndex === 6 && (
              <div className={`${styles.description} ${styles.answer7}`}></div>
            )}
            {selectedTabIndex === 7 && (
              <div>
                <div
                  className={`${styles.description} ${styles.answer8}`}
                ></div>
                {showLearnMoreBtn ? (
                  <Button
                    variant="primary"
                    text="Learn more"
                    onClick={() =>
                      window.open(
                        "https://aimagine.gitbook.io/docs.aimagine.wtf/"
                      )
                    }
                  />
                ) : null}
              </div>
            )}
            {selectedTabIndex === 8 && (
              <div className={`${styles.description} ${styles.answer9}`}></div>
            )}
            {selectedTabIndex === 9 && (
              <div className={`${styles.description} ${styles.answer10}`}></div>
            )}
            {selectedTabIndex === 10 && (
              <div className={`${styles.description} ${styles.answer11}`}></div>
            )}
            {selectedTabIndex === 11 && (
              <div>
                <div
                  className={`${styles.description} ${styles.answer12}`}
                ></div>
                {artistWaitlistBtn ? (
                  <Button
                    variant="primary"
                    text="Artist waitlist"
                    onClick={() => dispatch(handleOpenArtistWaitlistModal())}
                  />
                ) : null}
              </div>
            )}
            {selectedTabIndex === 12 && (
              <div>
                <div
                  className={`${styles.description} ${styles.answer13}`}
                ></div>
                {showSocialLinks ? (
                  <div className={styles.link}>
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
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.faq_mobile}>
        <FaqMobile
          title={title}
          active={active}
          selectedTabIndex={selectedTabIndex}
          handleTabClick={handleTabClick}
          showLearnMoreBtn={showLearnMoreBtn}
          artistWaitlistBtn={artistWaitlistBtn}
          showSocialLinks={showSocialLinks}
        />
      </div>
    </div>
  );
};

export default Faq;
