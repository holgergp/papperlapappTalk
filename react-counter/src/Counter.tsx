import { useState } from "react";

interface CounterProps {
  startWith: number;
}

export const Counter = ({ startWith }: CounterProps) => {
  const [counter, setCounter] = useState(startWith);

  console.log("Rendering in React");

  return (
    <div>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      <button onClick={(e) => setCounter(counter - 1)}>-</button>
      <div>{counter}</div>
    </div>
  );
};
