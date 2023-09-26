// Create a hook usePrevious() to return the previous value, with initial value of `undefined.

import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T | undefined {
  // your code here
  const ref = useRef<T | undefined>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// We are asked to create a hook that receives a new value and returns the previous
// one. It means we need to remember the old value before updating it with the new
// one. To do this, we leverage the fact that React's useEffect hook always runs
// after a render is painted to the screen. We use a React ref to store the previous
// value and set it to the new one in the useEffect hook, so that the update happens
// after the old value has been returned. The reason that we use React's useRef
// instead of useState is to avoid a re-render.
