import { IArtistWaitlistForm } from "@/app/types/artist-waitlist-form";
import { handleOpenArtistWaitlistSuccessModal } from "@/redux/features/modalSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import DiscordIcon from "../../svgs/DiscordIcon";
import styles from "./ArtistWaitlistPopup.module.scss";
import emailjs from "@emailjs/browser";

interface IArtistWaitlistPopupProps {
  close: () => void;
}

const ArtistWaitlistPopup = ({ close }: IArtistWaitlistPopupProps) => {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState<IArtistWaitlistForm>({
    from_name: "",
    from_email: "",
    social_handle: "",
    artistic_background: "",
    creative_work_link: "",
    collections_link: "",
    technical_proficiency: "",
    project_concept: "",
    social_link: "",
    followers_count: "",
    project_stage: "",
    i_certify: false,
  });
  const [submitText, setSubmitText] = useState<string>("Submit");

  const handleSubmit = async () => {
    try {
      setSubmitText("Submitting...");
      await emailjs.send(
        process.env.EMAIL_JS_SERVICE_ID || "",
        process.env.EMAIL_JS_TEMPLATE_ID || "",
        formValues as any,
        process.env.EMAIL_JS_API_KEY || ""
      );
      setSubmitText("Submit");
      close();
      dispatch(handleOpenArtistWaitlistSuccessModal());
    } catch (error) {
      alert("Something went wrong! Try submitting the form again.");
    }
  };

  return (
    <>
      <div className={styles.modalBody}>
        <p className={styles.description}>
          Please fill in the form below to submit your application for a curated
          NFT drop. <br /> Please note that the Aimagine curation board and
          community may take some time to review your application. The process
          may take up to several months. We will contact successful applicants
          by email.
        </p>
        <div className={styles.form}>
          <div className={styles.formControl}>
            <label>Artist&apos;s Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={formValues.from_name}
              onChange={(e) => {
                setFormValues({ ...formValues, from_name: e.target.value });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>Primary Email</label>
            <input
              type="text"
              placeholder="Your Email"
              value={formValues.from_email}
              onChange={(e) => {
                setFormValues({ ...formValues, from_email: e.target.value });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>Telegram or Twitter handle</label>
            <input
              type="text"
              placeholder="Your Telegram or Twitter handle"
              value={formValues.social_handle}
              onChange={(e) => {
                setFormValues({ ...formValues, social_handle: e.target.value });
              }}
            />
          </div>
          {/* <div className={styles.formControl}>
            <Button
              variant="primary"
              text="Connect your discord"
              startIcon={<DiscordIcon />}
            />
          </div> */}
          <div className={styles.formControl}>
            <label>
              Please share a short bio that showcases your artistic background.
            </label>
            <input
              type="text"
              placeholder="Your Artistic background"
              value={formValues.artistic_background}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  artistic_background: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>
              Please provide links that showcase your creative work. This could
              include social media links, portfolio pages, personal websites,
              exhibition history, press coverage, etc.
            </label>
            <input
              type="text"
              placeholder="Https://"
              value={formValues.creative_work_link}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  creative_work_link: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>
              Have you launched NFT before? Please provide links to your
              collections.
            </label>
            <input
              type="text"
              placeholder="Https://"
              value={formValues.collections_link}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  collections_link: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>
              Please share information about your technical proficiency. If you
              have a technical team, please provide details about their
              experience.
            </label>
            <input
              type="text"
              placeholder="Your technical proficiency"
              value={formValues.technical_proficiency}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  technical_proficiency: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>
              Please tell us about your project concept, NFTs supply, and price
              expectations.
            </label>
            <input
              type="text"
              placeholder="Your project concept"
              value={formValues.project_concept}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  project_concept: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>
              Please share links to your project website and social media if
              available.
            </label>
            <input
              type="text"
              placeholder="Https://"
              value={formValues.social_link}
              onChange={(e) => {
                setFormValues({ ...formValues, social_link: e.target.value });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>What is the size of your community, followers count?</label>
            <input
              type="text"
              placeholder="Your followers count"
              value={formValues.followers_count}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  followers_count: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <label>Please rate the stage of your project development.</label>
            <input
              type="text"
              placeholder="Your Project stage"
              value={formValues.project_stage}
              onChange={(e) => {
                setFormValues({ ...formValues, project_stage: e.target.value });
              }}
            />
          </div>
          <div className={styles.formControl}>
            <div className={styles.checkboxContainer}>
              <Checkbox
                checked={formValues.i_certify}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFormValues({
                    ...formValues,
                    i_certify: e.target.checked,
                  });
                }}
              />
              <p>
                I certify that my project will consist of 100% original content
                created by myself or my collaborative team and will not contain
                content that is purchased or requires licensing from third
                parties.
              </p>
            </div>
          </div>
          <div className={styles.submit}>
            <Button
              variant="primary"
              text={submitText}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistWaitlistPopup;
