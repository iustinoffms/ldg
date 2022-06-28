import React, { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  return { theme, setTheme };
}

export default useTheme;
