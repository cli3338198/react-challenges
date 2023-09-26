// It is quite common to see switches and checkboxes in web apps.

// Implement useToggle() to make things easier

// function App() {
//   const [on, toggle] = useToggle()
//   ...
// }

import { useState } from "react";

export function useToggle(on: boolean): [boolean, () => void] {
  // your code here
  const [isOn, setIsOn] = useState(on);
  return [isOn, () => setIsOn((isOn) => !isOn)];
}
