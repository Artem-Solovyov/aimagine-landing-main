"use client";

import React from "react";
import Button from "../components/Button/Button";
import DiscordIcon from "../components/svgs/DiscordIcon";
import styles from "./manifesto-page.module.scss";
import topCircle from "../assets/images/manifesto-top-circle.png";
import bottomCircle from "../assets/images/manifesto-bottom-circle.png";
import Image from "next/image";
import Lottie from "react-lottie";
import * as animationData from "../lotties/manifesto_animation.json";

const Manifesto = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.page}>
      <div className={styles.topCircle}>
        <Image src={topCircle} alt="circle" />
      </div>
      <div className={styles.bottomCircle}>
        <Image src={bottomCircle} alt="circle" />
      </div>
      <div className={`container ${styles.manifesto}`}>
        <h1>
          Art is for everyone, <span>finally.</span>
        </h1>
        <h2>
          <Lottie options={defaultOptions} />
        </h2>
        <div className={styles.firstSection}>
          <h3>Haven’t you heard all of this before?</h3>
          <div>
            <p>
              Who decides what is and isn’t art? Who decides whether digital art
              is “real” or not? If NFTs “have value” or not?
            </p>
            <p>
              We have all seen the gatekeeping of the art world. The struggle
              for new artists to find a platform, the amount of noise through
              which true collectors must sift to find real art. The limits that
              society puts on what communities can do.
            </p>
            <p>
              Art is supposed to be freedom in expression. Not that the industry
              of art wants it to be.
              <br /> You must have a degree, contacts, money—none of which is
              available to 90% of the world. But do they let that bother them?
              Or do they continue to live in their bubble of privilege? The
              world of galas, and glory to those of their choosing? The very few
              taking all of the pie—it’s a story old as time. Until now.
            </p>
          </div>
        </div>
        <div className={styles.secondSection}>
          <h3>We are here to free art</h3>
          <div className={styles.faq}>
            <p className={styles.question}>Who gets to be an artist?</p>
            <p className={styles.answer}>EVERYONE</p>

            <p className={styles.question}>
              Who gets to decide what art is good and what’s not?
            </p>
            <p className={styles.answer}>EVERYONE</p>

            <p className={styles.question}>Who gets a piece of the pie?</p>
            <p className={styles.answer}>EVERYONE</p>
          </div>
          <div className={styles.desc}>
            AImagine is a juggernaut striking the digital art scene, and the art
            world at large.  Use technology to free the world, and all of its
            art.  This is our mission. <br />
            <br /> Integrated no-code AI tools for everyone to unleash their
            inner artist.  First in the world social capital monetisation so
            everyone has a voice in the world of art. The fairest art auctions
            ever held, backed with web3 technology and structured so that it’s
            everyone wins instead of winner takes all.
          </div>
        </div>
        <div className={styles.thirdSection}>
          <h3>Get it yet?</h3>
          <p>
            <span>AImagine.</span> Join the revolution
          </p>
          <div className={styles.actions}>
            <Button
              variant="primary"
              startIcon={<DiscordIcon />}
              text="Join AImagine Discord"
              onClick={() => window.open("https://discord.gg/aimagine")}
            />
            <Button
              variant="secondary"
              text="Twitter"
              onClick={() => window.open("https://twitter.com/AimagineNFT")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
