import { useEffect } from "react";

/**
 * useSplash
 *
 * Hides the #splash-screen element that lives outside #root in index.html.
 * Waits for `minDuration` ms before fading out, so the splash never
 * flashes away too quickly on fast connections.
 *
 * @param {number} minDuration - Minimum time (ms) the splash is visible. Default: 2000
 */
export function useSplash(minDuration = 2000) {
  useEffect(() => {
    // Lock scroll while splash is showing
    document.body.classList.add("splash-loading");

    const splash = document.getElementById("splash-screen");

    const hideSplash = () => {
      if (!splash) return;

      // Trigger CSS fade-out transition
      splash.classList.add("splash-hidden");

      // Unlock scroll as soon as fade starts
      document.body.classList.remove("splash-loading");

      // Remove from DOM entirely after transition finishes (0.8s)
      splash.addEventListener("transitionend", () => splash.remove(), {
        once: true,
      });
    };

    const timer = setTimeout(hideSplash, minDuration);

    // Cleanup if component unmounts before timer fires (edge case)
    return () => clearTimeout(timer);
  }, []);
}
