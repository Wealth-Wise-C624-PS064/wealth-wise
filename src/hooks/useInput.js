import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const onChangeValueHandler = (event) => setValue(event.target.value);

  return [value, onChangeValueHandler, setValue];
};
