import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const onChange = (event) => {
      setValue(event.matches);
    };

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
};
