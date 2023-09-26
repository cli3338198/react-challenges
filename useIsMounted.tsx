// When we handle async requests in React, we need to pay attention if the component is already unmounted.

// Please implement useIsMounted() for us to easily tell if the component is still not unmounted.

import React, { useEffect, useRef } from "react";

export function useIsMounted(): () => boolean {
  // your code here
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  return () => mounted.current;
}
