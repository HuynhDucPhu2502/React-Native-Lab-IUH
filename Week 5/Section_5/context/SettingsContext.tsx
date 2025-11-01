import React, { createContext, useContext, useState, useMemo } from "react";

type SettingsState = {
  notifications: boolean;
  darkMode: boolean;
  toggleNotifications: () => void;
  toggleDarkMode: () => void;
};

const Ctx = createContext<SettingsState | null>(null);

export const SettingsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const value = useMemo(
    () => ({
      notifications,
      darkMode,
      toggleNotifications: () => setNotifications((v) => !v),
      toggleDarkMode: () => setDarkMode((v) => !v),
    }),
    [notifications, darkMode]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useSettings = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
};
