"use client";

import React from "react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <button onClick={toggleTheme}>
      {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
