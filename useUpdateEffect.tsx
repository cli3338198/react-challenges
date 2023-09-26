// Implement useUpdateEffect() that it works the same as useEffect() except that it skips running the callback on first render.

import React, {
  EffectCallback,
  DependencyList,
  useRef,
  useEffect,
} from "react";

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  // your code here
  const isNotFirstRender = useRef<boolean>(false);

  useEffect(() => {
    if (isNotFirstRender.current) {
      return effect();
    } else {
      isNotFirstRender.current = true;
    }
  }, deps);
}
