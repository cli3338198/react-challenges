// Create a PhoneNumberInput component.

// only accepts numerical digits
// format the number automatically as (123)456-7890 by
// adding the parenthesis when the 4th digit is entered
// also adding - before 7th digit
// You can use the default text input without any styling.

// Follow-up
// What if user removes some digits in the middle, does caret jumps to the end in your approach?

import React, { useState, ChangeEvent } from "react";
export function PhoneNumberInput() {
  // your code here
  const [value, setValue] = useState("");

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    let digits = evt.target.value.replace(/\D/g, "");
    if (digits.length > 10) digits = digits.substring(0, 10);
    if (digits.length > 6)
      digits = digits.substring(0, 6) + "-" + digits.substring(6);
    if (digits.length > 3)
      digits = "(" + digits.substring(0, 3) + ")" + digits.substring(3);
    setValue(digits);
  }

  return (
    <input
      data-testid="phone-number-input"
      value={value}
      onChange={handleChange}
    />
  );
}
