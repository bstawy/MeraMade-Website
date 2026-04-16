const DEFAULT_MIN_VW = 390;
const DEFAULT_MAX_VW = 1280;

/**
 * @param {number} minPx
 * @param {number} maxPx
 * @param {number} minVwPx
 * @param {number} maxVwPx
 */
const calculateClamp = (minPx, maxPx, minVwPx, maxVwPx) => {
  if (minPx >= maxPx)
    throw new Error(`minPx (${minPx}) must be less than maxPx (${maxPx})`);
  if (minVwPx >= maxVwPx)
    throw new Error(`minVw (${minVwPx}) must be less than maxVw (${maxVwPx})`);

  const root = 16;
  const minRem = minPx / root;
  const maxRem = maxPx / root;
  const slope = (maxRem - minRem) / ((maxVwPx - minVwPx) / root);
  const intercept = minRem - slope * (minVwPx / root);

  const vw = parseFloat((slope * 100).toFixed(4));
  const interceptRem = parseFloat(intercept.toFixed(4));
  const interceptPx = parseFloat((intercept * root).toFixed(4));

  return { minRem, maxRem, minPx, maxPx, vw, interceptRem, interceptPx };
};

/**
 * Formats a CSS linear part: e.g. "2.2469vw + 0.3750rem" or "2.2469vw - 0.3750rem"
 */
const linearPart = (vw, intercept, unit) => {
  const abs = Math.abs(intercept).toFixed(4);
  const op = intercept < 0 ? "-" : "+";
  return `${vw}vw ${op} ${abs}${unit}`;
};

/**
 * For typography — rem-based for accessibility/zoom support.
 * @param {number} minPx
 * @param {number} maxPx
 * @param {number} [minVw=390]
 * @param {number} [maxVw=1280]
 * @returns {string}
 */
export const fontClamp = (
  minPx,
  maxPx,
  minVw = DEFAULT_MIN_VW,
  maxVw = DEFAULT_MAX_VW,
) => {
  const { minRem, maxRem, vw, interceptRem } = calculateClamp(
    minPx,
    maxPx,
    minVw,
    maxVw,
  );
  return `clamp(${minRem}rem, ${linearPart(vw, interceptRem, "rem")}, ${maxRem}rem)`;
};

/**
 * For spacing — px-based for consistent padding/gaps.
 * @param {number} minPx
 * @param {number} maxPx
 * @param {number} [minVw=390]
 * @param {number} [maxVw=1280]
 * @returns {string}
 */
export const spaceClamp = (
  minPx,
  maxPx,
  minVw = DEFAULT_MIN_VW,
  maxVw = DEFAULT_MAX_VW,
) => {
  const {
    minPx: min,
    maxPx: max,
    vw,
    interceptPx,
  } = calculateClamp(minPx, maxPx, minVw, maxVw);
  return `clamp(${min}px, ${linearPart(vw, interceptPx, "px")}, ${max}px)`;
};
