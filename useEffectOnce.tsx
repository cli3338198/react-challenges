// Here is a simple problem, implement useEffectOnce() as the name says itself, it runs an effect only once.

import { EffectCallback, useEffect } from "react";

export function useEffectOnce(effect: EffectCallback) {
  // your code here
  useEffect(effect, []);
}
