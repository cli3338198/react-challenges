// SWR is a popular library of data fetching.

// Let's try to implement the basic usage by ourselves.

// import React from 'react'

// function App() {
//   const { data, error } = useSWR('/api', fetcher)
//   if (error) return <div>failed</div>
//   if (!data) return <div>loading</div>

//   return <div>succeeded</div>
// }
// this is not to replicate the true implementation of useSWR()
// The first argument key is for deduplication, we can safely ignore it for now

import { useState, useEffect, useMemo } from "react";

export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T;
  error?: E;
} {
  // your code here
  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();
  const response = useMemo(() => fetcher(), []);

  useEffect(() => {
    async function getAndSetData() {
      try {
        setData(await response);
      } catch (err) {
        setError(true as unknown as E);
      }
    }

    getAndSetData();
  }, []);

  return {
    data: response instanceof Promise ? data : response,
    error,
  };
}
