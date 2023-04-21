import { createSignal } from "solid-js";
interface CounterProps {
  startWith: number;
}
const Counter = ({startWith}: CounterProps) => {
  const [counterSignal, setCounterSignal] = createSignal(startWith);

  console.log("Rendering in Solid");

  return (
    <div class="counter-wrapper">
      <button onClick={(e) => setCounterSignal(counterSignal() + 1)}>+</button>
      <button onClick={(e) => setCounterSignal(counterSignal() - 1)}>-</button>
      <div class="counter-value">{counterSignal()}</div>
    </div>
  );
};

export default Counter;
