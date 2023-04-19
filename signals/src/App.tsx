import type { Component } from 'solid-js';

import styles from './App.module.css';
import {Hello} from "./Hello";
import {createEffect, createSignal} from "solid-js";

const App: Component = () => {
    const [parentText, setParentText] = createSignal("JS-Exchange");
   setTimeout(()=> setParentText('Feddich'),2000)
    //createEffect(() => setTimeout(()=> setParentText('Feddich'),2000));

    return (
    <div class={styles.App}>
        <Hello text={parentText()} />
    </div>
  );
};

export default App;
