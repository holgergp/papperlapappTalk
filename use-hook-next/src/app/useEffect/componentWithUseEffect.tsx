"use client";

import { use, useEffect, useState } from "react";

export const ComponentWithUseEffect = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const myPromise = new Promise<string>((res) => res("New Data"));
    myPromise.then((data) => setData(data));
  }, []);

  return <div>Use Effect with promises with value {data}</div>;
};
