"use client";
import styles from "./HeadingIdent.module.scss";

type HeadingIdentProps = {
  isLocked?: boolean;
};

const HeadingIdent = ({ isLocked }: HeadingIdentProps) => {
  return (
    <div
      onClick={() => {
        window.location.href = "/";
      }}
    >
      {/* <h1 className={styles.rsvpFancy}>
        <span>Peter</span>
        <em className={styles.ampersand}>&</em>
        <span>penny</span>
      </h1> */}
      <h1
        style={{
          display: "flex",
          fontSize: "3rem",
          flexDirection: "column",
          lineHeight: "65%",
          position: "relative",
          fontWeight: 400,
          marginBottom: 0,
          letterSpacing: "0.05em",
        }}
      >
        peter{" "}
        <em className={styles.ampersand}>
          <span>&</span>
        </em>{" "}
        penny
      </h1>
      <h2 className={styles.date}>Sunday 04 May, 2025</h2>
      <h3 className={styles.location}>
        {!isLocked && "Seckford Hall, Suffolk"}
      </h3>
    </div>
  );
};

export default HeadingIdent;
