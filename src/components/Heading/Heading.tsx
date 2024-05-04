import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({
  children,
  as,
  className,
}: {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}) => {
  return React.createElement(
    `${as}`,
    { className: `${styles.base} ${as && styles[as]} ${className}` },
    children
  );
};

export { Heading };
