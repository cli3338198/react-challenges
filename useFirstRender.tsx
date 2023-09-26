// Create a hook to tell if it is the first render.

// function App() {
//   const isFirstRender = useIsFirstRender()
//   // only true for the first render
//   ...
// }

import { useRef, useEffect } from "react";

export function useIsFirstRender(): boolean {
  // your code here
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  });

  // useEffect runs after the render has painted!

  return isFirstRender.current;
}

// useEffect runs first, sets current to false
// useRef runs, sets current to true

// We make use of React's useRef hook to track whether or not a component has been
// rendered for the first time.

// useRef returns us a mutable object which will persist for the entire lifetime of
// a component. The returned object has a current property which gets initialized
// with the argument we pass to useRef. We can modify the current property whenever
// we want and it won't trigger a re-render.

// We initialize a isFirstRender ref and initialize its current property to true,
// because we can assume that it gets initialized when a component starts with its
// first render. Then we use React's useEffect hook to set isFirstRender's current
// property to false, since useEffect runs after a component has rendered. When the
// component re-renders, isFirstRender.current has been set to false.
