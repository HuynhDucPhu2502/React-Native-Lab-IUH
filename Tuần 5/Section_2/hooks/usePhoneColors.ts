// src/hooks/usePhoneColors.ts
import { useEffect, useState } from "react";
import type { Color } from "../types/color";

export function usePhoneColors() {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://68d67dd6c2a1754b426aeeb4.mockapi.io/Section2`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Color[] = await res.json();

        if (!cancelled) setColors(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Fetch error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { colors, loading, error };
}
