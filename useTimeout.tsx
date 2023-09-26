// Create a hook to easily use setTimeout(callback, delay).

// reset the timer if delay changes
// DO NOT reset the timer if only callback changes

import { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number) {
  // your code here
  const cbRef = useRef(callback);
  cbRef.current = callback;

  useEffect(() => {
    const timeout = setTimeout(() => cbRef.current(), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
}
