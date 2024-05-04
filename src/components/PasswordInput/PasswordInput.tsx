"use client";

import router, { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./PasswordInput.module.scss";
import Button from "../Button/Button";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/${password.toLowerCase()}`);
  };

  const transformPassword = (password: string) => {
    // trim leading and trailing spaces
    password = password.trim();
    // replace spaces with hyphens
    password = password.replace(/\s/g, "-");

    return password.toLowerCase();
  };

  return (
    <>
      <form className={styles.passwordInput} onSubmit={handleSubmit}>
        <label>password</label>
        <input
          type="text"
          name="id"
          className={styles.input}
          onChange={(e) => setPassword(transformPassword(e.target.value))}
        />
        <Button className={styles.submitButton} type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default PasswordInput;
