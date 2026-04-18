import styles from "./Input.module.css";

const Input = ({
  label = null,
  hint = null,
  placeholder = "",
  value,
  onChange,
  type = "text",
  variant = "outlined",
  size = "md",
  iconLeft = null,
  iconRight = null,
  error = false,
  disabled = false,
  id,
  name,
}) => {
  const wrapperCls = [
    styles.wrapper,
    iconLeft && styles.hasIconLeft,
    iconRight && styles.hasIconRight,
  ]
    .filter(Boolean)
    .join(" ");

  const inputCls = [
    styles.input,
    styles[variant],
    styles[size],
    error && styles.error,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.field}>
      {label && (
        <label id={id} className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={wrapperCls}>
        {iconLeft && (
          <span className={`${styles.icon} ${styles.iconLeft}`}>
            {iconLeft}
          </span>
        )}
        <input
          id={id}
          name={name}
          type={type}
          className={inputCls}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {iconRight && (
          <span className={`${styles.icon} ${styles.iconRight}`}>
            {iconRight}
          </span>
        )}
      </div>
      {hint && (
        <span className={`${styles.hint} ${error ? styles.hintError : ""}`}>
          {hint}
        </span>
      )}
    </div>
  );
};

export default Input;
