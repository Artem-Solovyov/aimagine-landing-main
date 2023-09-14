"use client";

import Button from "@/app/components/Button/Button";
import { end } from "@/redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import UltimateArtPlatform from "./components/UltimateArtPlatform/UltimateArtPlatform";
import styles from "./page.module.scss";
import * as animationData from "./lotties/rotating_shape.json";

interface IStartingAnimation {
  text: string;
  theme: string;
}

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dispatch = useAppDispatch();
  const startFromScratch = useAppSelector(
    (state) => state.appReducer.startFromScratch
  );
  const [startingAnimation, setStartingAnimation] =
    useState<IStartingAnimation>({
      text: "",
      theme: "dark",
    });

  const startAnimation = () => {
    setStartingAnimation({
      text: "AImagine",
      theme: "dark",
    });
    setTimeout(() => {
      setStartingAnimation({
        text: "is where",
        theme: "dark",
      });
      setTimeout(() => {
        setStartingAnimation({
          text: "your",
          theme: "dark",
        });
        setTimeout(() => {
          setStartingAnimation({
            text: "visions",
            theme: "light",
          });
          setTimeout(() => {
            setStartingAnimation({
              text: "become",
              theme: "dark",
            });
            setTimeout(() => {
              setStartingAnimation({
                text: "art",
                theme: "yellow",
              });
              setTimeout(() => {
                setStartingAnimation({
                  text: "followers",
                  theme: "dark",
                });
                setTimeout(() => {
                  setStartingAnimation({
                    text: "followers become",
                    theme: "dark",
                  });
                  setTimeout(() => {
                    setStartingAnimation({
                      text: "followers become curators",
                      theme: "dark",
                    });
                    setTimeout(() => {
                      setStartingAnimation({
                        text: "social capital",
                        theme: "light",
                      });
                      setTimeout(() => {
                        setStartingAnimation({
                          text: "is",
                          theme: "light",
                        });
                        setTimeout(() => {
                          setStartingAnimation({
                            text: "is fairly",
                            theme: "light",
                          });
                          setTimeout(() => {
                            setStartingAnimation({
                              text: "is fairly rewarded",
                              theme: "light",
                            });
                            setTimeout(() => {
                              dispatch(end());
                              setStartingAnimation({
                                text: "",
                                theme: "dark",
                              });
                            }, 500);
                          }, 500);
                        }, 500);
                      }, 500);
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  };

  useEffect(() => {
    if (startingAnimation.theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [startingAnimation]);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return pageLoaded ? (
    <div className={styles.homepage}>
      <UltimateArtPlatform />
      <div
        className={`${styles.content} ${
          !startFromScratch ? styles.hide : styles.show
        } ${startingAnimation.theme === "light" ? styles.light : styles.dark}`}
      >
        {!startingAnimation.text ? (
          <div className={styles.animation_container}>
            <div className={styles.lottie_animation}>
              <Lottie options={defaultOptions} />
            </div>
            <h1></h1>
            <Button
              variant="primary"
              text="Are you in?"
              onClick={startAnimation}
            />
          </div>
        ) : (
          <h1
            className={`${styles.changingText} ${
              startingAnimation.theme === "dark"
                ? styles.dark
                : startingAnimation.theme === "light"
                ? styles.light
                : styles.yellow
            }`}
          >
            {startingAnimation.text}
          </h1>
        )}
      </div>
    </div>
  ) : null;
}
