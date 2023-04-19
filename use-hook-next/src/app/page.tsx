import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/useEffect"}>Use Effect</Link>
        </li>
        <li>
          <Link href={"/use"}>Use Hook</Link>
        </li>
      </ul>
    </div>
  );
}
