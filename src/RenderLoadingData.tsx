import { use, useEffect, useState } from "react";
import { RSVPType } from "./RSVP_Form/Inputs/Common";
import Image from "next/image";
import styles from "./RenderLoadingData.module.scss";
type SelectionType = {
  // loading is a timestamp
  loading: boolean;
  loadingStartTime: number;
  data: any;
  //   rsvp: RSVPType;
};

type DataFetchType = {
  password: string;
  name: string;
  main: string;
  dessert: string;
  planning_to_attend: boolean;
  reason: string;
  human_type: string;
  fullName: string;
  anything_else: string;
};

const fetchData = async ({
  password,
  name,
  main,
  dessert,
  planning_to_attend,
  reason,
  human_type,
  anything_else,
  fullName,
}: DataFetchType) => {
  const body = {
    password: password,
    name: name,
    main: main,
    dessert: dessert,
    planning_to_attend: planning_to_attend,
    reason: reason,
    human_type: human_type,
    anything_else: anything_else,
    fullName: fullName,
  };
  const response = await fetch("/api/hello", {
    method: "POST", // or 'GET', 'PUT', etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  console.log(data);
};

const RenderLoadingData = ({
  loading,
  loadingStartTime,
  data,
}: SelectionType) => {
  const minimumLoadTime = 1000;
  const [shouldShowSuccess, setShouldShowSuccess] = useState(false);
  // if loading, then render "Loading..."
  // if data has arrived, then render the data
  // but if the data has arrived and it's been less than 2 seconds, continue to show loading,  show the data after 2 seconds

  useEffect(() => {
    const rsvp = data?.updateWeddingRsvp;

    if (shouldShowSuccess) {
      // once the data is successfully stored, we'll send an email to peter to confirm. Then we'll refresh the page after 1 second
      fetchData({
        name: rsvp.name,
        password: rsvp.password,
        planning_to_attend: rsvp.planning_to_attend,
        main: rsvp.main,
        dessert: rsvp.dessert,
        reason: rsvp.reason,
        human_type: rsvp.human_type,
        anything_else: rsvp.anything_else,
        fullName: rsvp.fullName,
      }).then(() => {
        setTimeout(() => {
          // refresh the page
          window.location.reload();
        }, 1000);
      });
    }
  }, [shouldShowSuccess]);

  useEffect(() => {
    if (!data) {
      setShouldShowSuccess(false);
    }

    if (data && Date.now() - loadingStartTime >= minimumLoadTime) {
      setShouldShowSuccess(true);
    }

    if (data && Date.now() - loadingStartTime < minimumLoadTime) {
      const timer = setTimeout(() => {
        setShouldShowSuccess(true);
      }, minimumLoadTime);
      return () => clearTimeout(timer);
    }
  }, [loadingStartTime, data]);

  // if (!shouldShowSuccess) {
  const startSize = 100;
  const smallSize = startSize / 1.4719764012;

  return (
    <div className={styles.full}>
      {data?.updateWeddingRsvp?.feature_flag?.includes("joke") && (
        <div
          style={{ width: startSize, height: startSize }}
          className={styles.loadingContainer}
        >
          <img
            width={startSize}
            height={startSize}
            src="/loading_outer.png"
            alt="loading"
            className={`${styles.position} ${styles.loadingOuter}`}
          />
          <img
            width={smallSize}
            height={smallSize}
            src="/loading_inner.png"
            alt="loading"
            className={`${styles.position} ${styles.loadingInner}`}
          />
        </div>
      )}
      Sending...
    </div>
  );
};

export default RenderLoadingData;
