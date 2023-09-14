"use client";

import Image from "next/image";
import React from "react";
import styles from "./UltimateArtPlatform.module.scss";
import createEarnImage from "../../assets/images/create2earn.png";
import curateEarnImage from "../../assets/images/curate2earn.png";
import bidEarnImage from "../../assets/images/bid2earn.png";
import AIMAGINEImage from "../../assets/images/AIMAGINE.png";
import Button from "../Button/Button";
import { useAppDispatch } from "@/redux/hooks";
import { handleOpenJoinOurCommunityModal } from "@/redux/features/modalSlice";
import { useRouter } from "next/navigation";

const UltimateArtPlatform = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className={styles.ultimateArtPlatformPage}>
      <div className="container">
        <h1 className={styles.title}>The Ultimate Art Platform</h1>
        <p className={styles.description}></p>
        <div className={styles.grid}>
          <div>
            <Image src={createEarnImage} alt="Create 2 earn" />
            <div>
              <h2>CREATE 2 EARN</h2>
              <h3>for artists</h3>
            </div>
          </div>
          <div>
            <Image src={curateEarnImage} alt="Curate 2 earn" />
            <div>
              <h2>CURATE 2 EARN</h2>
              <h3>for community</h3>
            </div>
          </div>
          <div>
            <Image src={bidEarnImage} alt="Bid 2 earn" />
            <div>
              <h2>BID 2 EARN</h2>
              <h3>for collectors</h3>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            variant="primary"
            text="Dive in"
            onClick={() => router.push("/faq")}
          />
          <Button
            variant="secondary"
            text="Community"
            onClick={() => dispatch(handleOpenJoinOurCommunityModal())}
          />
        </div>
      </div>
    </div>
  );
};

export default UltimateArtPlatform;
