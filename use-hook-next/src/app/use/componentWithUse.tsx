"use client";

import { use } from "react";
const getFromAPI = async () => {
  return new Promise<string>((res) => setTimeout(() => res("New Data"), 5000));
};

export const ComponentWithUse = () => {
  const response = use(getFromAPI());

  return <div>UseHook in pages with value {response}</div>;
};
