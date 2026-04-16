import { fontClamp, spaceClamp } from "./clamp";

export const injectTokens = () => {
  const tokens = {
    "--fs-xs": fontClamp(12, 14),
    "--fs-sm": fontClamp(16, 18),
    "--fs-md": fontClamp(28, 32),
    "--fs-lg": fontClamp(36, 48),
    "--fs-xl": fontClamp(48, 64),
    "--fs-2xl": fontClamp(64, 96),

    "--space-xs": spaceClamp(4, 8),
    "--space-sm": spaceClamp(8, 16),
    "--space-md": spaceClamp(16, 32),
    "--space-lg": spaceClamp(32, 64),
    "--space-xl": spaceClamp(24, 96),
  };

  const root = document.documentElement;
  Object.entries(tokens).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};
