import * as Switch from "@radix-ui/react-switch";
import styles from "./SwitchControl.module.scss";

const SwitchControl = ({
  defaultValue,
  onCheckedChange,
  label,
}: {
  defaultValue: boolean;
  onCheckedChange: (value: boolean) => void;
  label: string;
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={label.replace(/\s/g, "")}>
        {label}
      </label>
      <div className={styles.toggleTextWrapper}>
        <p
          className={styles.valleft}
          style={{ fontWeight: !defaultValue ? "bold" : "normal" }}
        >
          no
        </p>
        <Switch.Root
          defaultChecked={defaultValue || false}
          onCheckedChange={onCheckedChange}
          className={styles.SwitchRoot}
          id={label.replace(/\s/g, "")}
        >
          <Switch.Thumb className={styles.SwitchThumb} />
        </Switch.Root>
        <p
          className={styles.valright}
          style={{ fontWeight: defaultValue ? "bold" : "normal" }}
        >
          yes
        </p>
      </div>
    </div>
  );
};

export default SwitchControl;
