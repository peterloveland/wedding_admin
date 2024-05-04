import * as React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { RSVPFormINPUT } from "@/src/RSVP_Form/Inputs/Common";
import styles from "./RadioSelection.module.scss";

type RadioGroupContainerProps = {
  defaultValue?: string;
  children: React.ReactNode;
  // options: RSVPFormINPUT[];
  // selected: string;
  onValueChange: (value: string) => void;
  name: string;
};

const RadioGroupContainer = ({
  // options,
  // selected,
  defaultValue,
  onValueChange,
  children,
  name,
}: RadioGroupContainerProps) => {
  return (
    <RadioGroup.Root
      className={styles.RadioGroupRoot}
      defaultValue={defaultValue || undefined}
      aria-label={name}
      name={name}
      required
      onValueChange={onValueChange}
    >
      {children}
    </RadioGroup.Root>
  );
};

type RadioSelectionProps = {
  children: React.ReactNode;
  value: string;
  selected?: string;
  subtle?: boolean;
  className?: string;
  noDivider?: boolean;
};

const RadioOption = ({
  children,
  value,
  selected,
  subtle,
  className,
  noDivider,
}: RadioSelectionProps) => {
  // label ref
  const labelRef = React.useRef<HTMLLabelElement>(null);
  return (
    <>
      <label
        className={`${styles.radioOption} ${className} ${styles.label} ${
          subtle && styles.subtle
        } ${noDivider && styles.noDivider}`}
        htmlFor={value.replace(/\s/g, "")}
        style={{ fontWeight: selected === value ? "bold" : "normal" }}
        ref={labelRef}
      >
        <div className={styles.labelContent}>{children}</div>
        <RadioGroup.Item
          className={`${styles.radioItem}`}
          value={value}
          id={value.replace(/\s/g, "")}
        >
          <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
        </RadioGroup.Item>
      </label>
    </>
  );
};

export { RadioGroupContainer, RadioOption };
