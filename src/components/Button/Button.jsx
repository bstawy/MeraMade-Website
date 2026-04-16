import styles from "./Button.module.css";

const Button = ({
  label,
  variant = "primary",
  size = "lg",
  disabled = false,
  onClick,
}) => {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={cls} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
