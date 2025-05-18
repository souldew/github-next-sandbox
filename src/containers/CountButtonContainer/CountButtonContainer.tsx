import { Button } from "@/components/Button";
import { useState } from "react";

export const CountButtonContainer = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return <Button onClick={increment}>Count: {count}</Button>;
};
