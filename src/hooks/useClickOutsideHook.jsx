import { useEffect } from "react";

export function useClickOutside(ref, callback) {
  useEffect(() => {
    function handle(e) {
      const isClickOutside = ref.current && !ref.current.contains(e.target);
      const isEscapeKey = e.key === "Escape";

      if (isClickOutside || isEscapeKey) {
        callback();
      }
    }

    document.addEventListener("mousedown", handle);
    document.addEventListener("keydown", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("keydown", handle);
    };
  }, [ref, callback]);
}
