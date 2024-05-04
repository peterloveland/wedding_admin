import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  props?: any;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  icon?: boolean;
  size?: "small" | "medium" | "large";
};

const Button = (props: ButtonProps) => {
  // get rest of props
  const { children, onClick, className, style, variant, icon, size, ...rest } =
    props;
  return (
    <button
      onClick={onClick}
      className={`Button ${styles.buttonContainer} ${className}
        ${size && styles[size]}
      ${variant && styles[variant]} ${icon && styles.iconVariant}`}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
