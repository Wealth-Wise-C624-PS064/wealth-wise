import { useCallback } from "react";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  const handleClick = useCallback(() => {
    alert("Hello, World!");
  }, []);

  return (
    <section>
      <div>
        <p>Home Page</p>
        <Button onClick={handleClick}>Click Me</Button>
      </div>
    </section>
  );
}
