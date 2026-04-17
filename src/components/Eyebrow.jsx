const Eyebrow = ({
  text,
  fontSize = "var(--fs-14)",
  letterSpacing = "0.3rem",
}) => {
  const styles = {
    marginBottom: "8px",
    color: "var(--color-primary)",
    fontSize: fontSize,
    fontWeight: "var(--fw-regular)",
    letterSpacing: letterSpacing,
  };

  return <span style={styles}>{text}</span>;
};

export default Eyebrow;
