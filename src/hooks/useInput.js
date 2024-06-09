import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const onChangeValueHandler = (event) => {
    const rawValue = event.target.value.replace(/,/g, "");
    if (!isNaN(rawValue) && /^\d*$/.test(rawValue)) {
      setValue(rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  };

  return [value, onChangeValueHandler, setValue];
};
