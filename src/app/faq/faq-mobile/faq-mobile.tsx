"use client";

import ArrowIcon from "@/app/components/svgs/ArrowIcon";
import FaqLogoIcon from "@/app/components/svgs/FaqLogoIcon";
import UserIcon from "@/app/components/svgs/UserIcon";
import { IFaq } from "@/app/types/faq";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { questionsData } from "../faq-questions-data";
import styles from "./faq-mobile.module.scss";
import Button from "@/app/components/Button/Button";
import { useAppDispatch } from "@/redux/hooks";
import { handleOpenArtistWaitlistModal } from "@/redux/features/modalSlice";
import TwitterIcon from "@/app/components/svgs/TwitterIcon";
import DiscordIcon from "@/app/components/svgs/DiscordIcon";
import TelegramIcon from "@/app/components/svgs/TelegramIcon";

interface IProps {
  title: string;
  active: number;
  selectedTabIndex: number;
  handleTabClick: (item: IFaq, index: number) => void;
  showLearnMoreBtn: boolean;
  artistWaitlistBtn: boolean;
  showSocialLinks: boolean;
}

const FaqMobile = ({
  title,
  active,
  selectedTabIndex,
  handleTabClick,
  showLearnMoreBtn,
  artistWaitlistBtn,
  showSocialLinks,
}: IProps) => {
  const dispatch = useAppDispatch();
  const [showQuestionsPopup, setShowQuestionsPopup] = useState(false);

  useEffect(() => {
    if (document.querySelector("header")) {
      let header: any = document.querySelector("header");
      if (showQuestionsPopup) {
        header.style.zIndex = "1";
      } else {
        header.style.zIndex = "9999";
      }
    }
  }, [showQuestionsPopup]);

  return (
    <div className={styles.faq_mobile_content}>
      <div className={styles.faq_mobile_content_container}>
        <div className={styles.accordion}>
          <div className={styles.accordion_body}>
            <div className={styles.accordion_body_header}>
              <div className={styles.user_icon}>
                <UserIcon />
              </div>
              <span>{title}</span>
            </div>
            <div className={styles.accordion_body_content}>
              <div className={styles.logo_icon}>
                <FaqLogoIcon />
              </div>
              {selectedTabIndex === 0 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer1}`}
                ></div>
              )}
              {selectedTabIndex === 1 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer2}`}
                ></div>
              )}
              {selectedTabIndex === 2 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer3}`}
                ></div>
              )}
              {selectedTabIndex === 3 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer4}`}
                ></div>
              )}
              {selectedTabIndex === 4 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer5}`}
                ></div>
              )}
              {selectedTabIndex === 5 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer6}`}
                ></div>
              )}
              {selectedTabIndex === 6 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer7}`}
                ></div>
              )}
              {selectedTabIndex === 7 && (
                <div>
                  <div
                    className={`${styles.description} ${styles.mobile_answer8}`}
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
                <div
                  className={`${styles.description} ${styles.mobile_answer9}`}
                ></div>
              )}
              {selectedTabIndex === 9 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer10}`}
                ></div>
              )}
              {selectedTabIndex === 10 && (
                <div
                  className={`${styles.description} ${styles.mobile_answer11}`}
                ></div>
              )}
              {selectedTabIndex === 11 && (
                <div>
                  <div
                    className={`${styles.description} ${styles.mobile_answer12}`}
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
                    className={`${styles.description} ${styles.mobile_answer13}`}
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
          <div
            className={styles.accordion_header}
            onClick={() => {
              setShowQuestionsPopup(true);
            }}
          >
            <span
              className={`${styles.accordion_header_title} ${
                active == selectedTabIndex + 1 && "active"
              }`}
            >
              {title}
            </span>
            <span
              className={`${styles.arrow_icon} ${
                showQuestionsPopup ? styles.rotate : ""
              }`}
            >
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
      {showQuestionsPopup ? (
        <div
          className={styles.questions_popup}
          onClick={() => {
            setShowQuestionsPopup(false);
          }}
        >
          <div className={styles.questions_popup_container}>
            {questionsData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    handleTabClick(item, index);
                  }}
                  className={styles.div}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FaqMobile;
