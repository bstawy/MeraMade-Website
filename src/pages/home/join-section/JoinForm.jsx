import { useState, useEffect, useRef } from "react";

import Input from "../../../components/input/Input";
import Button from "../../../components/Button/Button";

import styles from "./JoinSection.module.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (value) => {
  if (!value) return "Email address is required.";
  if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address.";
  return null;
};

const ICONS = {
  success: (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Pass</title>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  error: (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Pass</title>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
};

const Snackbar = ({ snack, onClose }) => {
  if (!snack) return null;
  return (
    <div
      className={`${styles.snackbar} ${snack.visible ? styles.snackbarShow : styles.snackbarHide}`}
    >
      <div className={`${styles.snackbarInner} ${styles[snack.type]}`}>
        <div className={styles.snackbarIcon}>{ICONS[snack.type]}</div>
        <div className={styles.snackbarText}>
          <strong>{snack.title}</strong>
          <span>{snack.body}</span>
        </div>
        <button
          type="button"
          className={styles.snackbarClose}
          onClick={onClose}
          aria-label="Dismiss"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <title>Pass</title>
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const JoinForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const [snack, setSnack] = useState(null);
  const timerRef = useRef(null);

  const showSnackbar = (type, title, body) => {
    clearTimeout(timerRef.current);
    setSnack({ type, title, body, visible: true });
    timerRef.current = setTimeout(() => {
      setSnack((s) => s && { ...s, visible: false });
    }, 5000);
  };

  const hideSnackbar = () => {
    clearTimeout(timerRef.current);
    setSnack((s) => s && { ...s, visible: false });
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (isDirty) setError(validateEmail(value));
  };

  const handleBlur = () => {
    if (!isDirty && email) {
      setIsDirty(true);
      setError(validateEmail(email));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDirty(true);
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      showSnackbar(
        "error",
        "Oops, something's missing.",
        "Please enter a valid email to continue.",
      );
      return;
    }
    setError(null);
    showSnackbar(
      "success",
      "You're in the circle!",
      "Check your inbox — a welcome note is on its way.",
    );
    onSubmit?.(email);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <Input
          type="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email Address"
          error={!!error}
          hint={error}
        />
        <Button label="Subscribe" size="md" onClick={handleSubmit} />
      </form>

      <Snackbar snack={snack} onClose={hideSnackbar} />
    </>
  );
};

export default JoinForm;
