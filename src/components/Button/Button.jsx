import styles from "./Button.module.css";

const iconColorDefaults = {
  primary: "var(--color-text-on-primary)",
  ghost: "var(--color-primary)",
  text: "var(--color-primary)",
};

const Button = ({
  label,
  icon = null,
  iconPosition = "right",
  variant = "primary",
  size = "lg",
  disabled = false,
  iconColor,
  onClick,
}) => {
  const resolvedIconColor =
    iconColor ?? iconColorDefaults[variant] ?? "currentColor";

  const cls = [
    styles.btn,
    icon && styles.iconButton,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const iconNode = icon && (
    <span
      style={{
        color: resolvedIconColor,
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {icon}
    </span>
  );

  return (
    <button type="button" className={cls} disabled={disabled} onClick={onClick}>
      {iconPosition === "left" && iconNode}
      {label}
      {iconPosition === "right" && iconNode}
    </button>
  );
};

export default Button;
