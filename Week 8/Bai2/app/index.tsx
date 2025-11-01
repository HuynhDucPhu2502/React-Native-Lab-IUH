// app/index.tsx
import { getName } from "@/lib/storage";
import { Redirect, type Href } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [href, setHref] = useState<Href | null>(null);

  useEffect(() => {
    (async () => {
      const n = await getName();
      setHref((n ? "/(main)/home" : "/(onboarding)/welcome") as Href);
    })();
  }, []);

  if (!href) return null;
  return <Redirect href={href} />;
}
