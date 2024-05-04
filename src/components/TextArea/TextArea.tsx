import styles from "./TextArea.module.scss";

type TextAreaType = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  value: string;
  placeholder: string;
  className?: string;
};

const TextArea = ({
  value,
  onChange,
  id,
  placeholder,
  className,
}: TextAreaType) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
