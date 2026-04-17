import styles from "./Button.module.css";

const Button = ({
  label,
  icon = null,
  variant = "primary",
  size = "lg",
  disabled = false,
  iconColor = icon && "var(--color-primary)",
  onClick,
}) => {
  const cls = [
    styles.btn,
    icon && styles.iconButton,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const iconStyle = {
    color: iconColor,
  };

  return (
    <button type="button" className={cls} disabled={disabled} onClick={onClick}>
      {label} {icon && <span style={iconStyle}>{icon}</span>}
    </button>
  );
};

export default Button;
