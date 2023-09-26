// Click above header menu on this page, you can see that the dropdown menu is dismissed after clicking outside.

// Now you are asked to implement a React hook to make it eaiser to implement such behavior.

// function Component() {
//   const ref = useClickOutside(() => {
//     alert('clicked outside')
//   });
//   return <div ref={ref}>..</div>
// }

import React, { useRef, useEffect, useCallback } from "react";

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  // your code here
  const ref = useRef<T>(null);

  const handleClick = useCallback((evt: MouseEvent) => {
    if (ref.current && !ref.current.contains(evt.target as Node)) {
      callback();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [ref.current]);

  return ref;
}
