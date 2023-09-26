// It is common to see conditional rendering based on hover state of some element.

// We can achive it by CSS pseduo class :hover, but for more complex cases it might be better to have state controlled by script.

// Now you are asked to create a useHover() hook.

// function App() {
//   const [ref, isHovered] = useHover()
//   return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
// }

import { Ref, useRef, useState, useEffect } from "react";

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  // your code here
  const divRef = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(false);

    const isOn = () => setIsHovered(true);
    const isOff = () => setIsHovered(false);

    if (divRef.current) {
      divRef.current.addEventListener("mouseenter", isOn);
      divRef.current.addEventListener("mouseleave", isOff);
    }

    return () => {
      divRef.current?.removeEventListener("mouseenter", isOn);
      divRef.current?.removeEventListener("mouseenter", isOff);
    };
  }, [divRef.current]);

  return [divRef, isHovered];
}
