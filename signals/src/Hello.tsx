import {createEffect, createSignal} from "solid-js";

interface HelloProps {
    text: string
}

export const Hello = (props: HelloProps) =>{
    //const newSignal = () => props.text + "2323";

    console.log("Rendering");
    return (<p>{props.text}</p>)
}
