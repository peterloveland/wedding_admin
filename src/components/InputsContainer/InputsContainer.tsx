import styles from "./InputsContainer.module.scss";

type InputsContainerProps = {
  children: React.ReactNode;
  verticalSpacing?: "small" | "medium" | "large";
};

const InputsContainer = ({
  children,
  verticalSpacing = "medium",
}: InputsContainerProps) => {
  return (
    <div className={`${styles.inputsContainer} ${styles[verticalSpacing]}`}>
      {children}
    </div>
  );
};

export { InputsContainer };
