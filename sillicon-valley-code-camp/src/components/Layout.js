import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

function Layout({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === "light" ? "container-fluid light " : "container-fluid dark"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
