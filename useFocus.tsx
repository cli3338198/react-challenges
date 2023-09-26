// CSS pseudo-class :focus-within could be used to allow conditional rendering in parent element on the focus state of descendant elements.

// While it is cool, in complex web apps, it might be better to control the state in script.

// Now please create useFocus() to support this.

// function App() {
//   const [ref, isFocused] = useFocus()
//   return <div>
//     <input ref={ref}/>
//     {isFocused && <p>focused</p>}
//   </div>
// }

import React, { Ref, useRef, useState, useEffect, useCallback } from "react";

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  // your code here
  const ref = useRef<T>(null);
  const [isFocused, setIsFocused] = useState(false);

  const toggle = useCallback(() => setIsFocused((x) => !x), []);

  useEffect(() => {
    const element = ref.current;

    element?.addEventListener("focus", toggle);
    element?.addEventListener("blur", toggle);

    return () => {
      element?.removeEventListener("focus", toggle);
      element?.removeEventListener("blur", toggle);
    };
  }, [ref.current]);

  return [ref, isFocused];
}
