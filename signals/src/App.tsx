import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Counter } from "./Counter";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Counter startWith={0} />
    </div>
  );
};

export default App;
