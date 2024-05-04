import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import styles from "./DialogContent.module.scss";
import { Cross2Icon } from "@radix-ui/react-icons";
import Button from "../Button/Button";

type DialogContentProps = {
  children: React.ReactNode;
  onInteractOutside?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  className?: string;
};

type DialogProps = {
  children: React.ReactNode;
};

type DialogRootProps = {
  children: React.ReactNode;
};

type DialogTriggerProps = {
  children: React.ReactNode;
  asChild?: boolean;
};

type DialogTitleProps = {
  children: React.ReactNode;
  canClose?: boolean;
};

const DialogContent = ({ children }: DialogContentProps) => {
  return (
    <RadixDialog.Content className={styles.DialogContent}>
      {children}
    </RadixDialog.Content>
  );
};

const Dialog = ({ children }: DialogProps) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.DialogOverlay}>
        {children}
      </RadixDialog.Overlay>
    </RadixDialog.Portal>
  );
};

const DialogRoot = ({ children, ...props }: DialogRootProps) => {
  return <RadixDialog.Root {...props}>{children}</RadixDialog.Root>;
};

const DialogTrigger = ({ children, ...props }: DialogTriggerProps) => {
  return <RadixDialog.Trigger {...props}>{children}</RadixDialog.Trigger>;
};

const DialogTitle = ({ children, canClose = true }: DialogTitleProps) => {
  return (
    <RadixDialog.Title className={styles.DialogTitle}>
      <div className={styles.title}>{children}</div>
      {canClose && (
        <RadixDialog.Close asChild className={styles.close}>
          <Button icon variant="ghost" aria-label="Close">
            <Cross2Icon />
          </Button>
        </RadixDialog.Close>
      )}
    </RadixDialog.Title>
  );
};

export { Dialog, DialogContent, DialogRoot, DialogTrigger, DialogTitle };
