import { createSignal } from "solid-js";

interface CounterProps {
  startWith: number;
}

export const Counter = (props: CounterProps) => {
  const [counterSignal, setCounterSignal] = createSignal(props.startWith);

  console.log("Rendering in Solid");

  return (
    <div>
      <button onClick={(e) => setCounterSignal(counterSignal() + 1)}>+</button>
      <button onClick={(e) => setCounterSignal(counterSignal() - 1)}>-</button>
      <div>{counterSignal()}</div>
    </div>
  );
};
