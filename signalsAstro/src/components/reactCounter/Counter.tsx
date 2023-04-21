import { useState } from "react";
interface CounterProps {
  startWith: number;
}

const Counter = ({ startWith }: CounterProps) => {
  const [counter, setCounter] = useState(startWith);

  //console.log("Rendering in React");

  return (
    <div className={"counter-wrapper"}>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      <button onClick={(e) => setCounter(counter - 1)}>-</button>
      <div className    ={"counter-value"}>{counter}</div>
    </div>
  );
};

export default Counter;
