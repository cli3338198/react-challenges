// When array is used in React state, we need to deal with actions such as push and remove.

// Implement useArray() to make life easier.

// const {value, push, removeByIndex} = useArray([1, 2, 3])

import React, { useState, useCallback } from "react";

type UseArrayActions<T> = {
  push: (item: T) => void;
  removeByIndex: (index: number) => void;
};

export function useArray<T>(
  initialValue: T[]
): { value: T[] } & UseArrayActions<T> {
  const [value, setValue] = useState(initialValue);

  const push = useCallback(
    (item: T) => setValue((items) => [...items, item]),
    []
  );

  const removeByIndex = useCallback((index: number) => {
    setValue((items) => [...items.slice(0, index), ...items.slice(index + 1)]);
  }, []);

  return {
    value,
    push,
    removeByIndex,
  };
}

// Why is callback needed in the hook?

// You'll notice that without the callback wrapper around push and removeByIndex we get a result of 2 where we "expect" 1. That's because without the callback wrapper, when a component gets re-rendered (or flushed, in the test), it creates a new instance of the function. So when the test collects the the push/remove functions into it's array, it's collecting two unique instance/objects of the functions in the test, which is why when you wrap it around a set, it sees that the two references are the same so it removes the dupe reference calls.

// So when we wrap the push/removeByIndex functions around a callback, even when it's re-rendered, it'll retain the original function - so even while push_values has two values worth of the same-named function, it'll reduce it to 1 since they're identical in reference.
