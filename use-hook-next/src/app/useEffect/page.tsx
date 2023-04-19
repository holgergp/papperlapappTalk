"use client";

import { Suspense } from "react";
import { ComponentWithUse } from "@/app/use/componentWithUse";
import { ComponentWithUseEffect } from "@/app/useEffect/componentWithUseEffect";

export default function Page() {
  return <ComponentWithUseEffect key={1} />;
}
