const Eyebrow = ({
  text,
  fontSize = "var(--fs-14)",
  letterSpacing = "0.3rem",
}) => {
  const styles = {
    marginBottom: "var(--space-8)",
    color: "var(--color-accent)",
    fontSize: fontSize,
    fontWeight: "var(--fw-medium)",
    letterSpacing: letterSpacing,
  };

  return <span style={styles}>{text}</span>;
};

export default Eyebrow;
