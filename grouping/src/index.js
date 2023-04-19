import "./styles.css";
import { newGroupFunction, oldGroupFunction } from "./arrayMap";
import { prettyPrintJson } from "pretty-print-json";

document.getElementById("app").innerHTML = `

<pre id=account class=json-container>
 ${prettyPrintJson.toHtml({ ...newGroupFunction() })}
 ${prettyPrintJson.toHtml({ ...oldGroupFunction() })}
</div>
</pre>
`;
