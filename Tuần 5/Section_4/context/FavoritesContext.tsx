import React, { createContext, useContext, useMemo, useState } from "react";

type Ctx = {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
};

const FavoritesContext = createContext<Ctx | null>(null);

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [ids, setIds] = useState<string[]>([]);
  const toggle = (id: string) =>
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  const has = (id: string) => ids.includes(id);

  const value = useMemo(() => ({ ids, toggle, has }), [ids]);
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFav = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFav must be used inside FavoritesProvider");
  return ctx;
};
