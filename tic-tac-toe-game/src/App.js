import NewGame from "./pages/LandingPage";

import CPUGame from "./pages/InGame";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import "./styles.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#F2B137",
      dark: "#FFC860",
      contrastText: "#1A2A33",
    },
    secondary: {
      light: "#ff7961",
      main: "#31C3BD",
      dark: "#65E9E4",
      contrastText: "#1A2A33",
    },
    third: {
      light: "#1F3641",
      main: "#1A2A33",
      dark: "#1A2A33",
      contrastText: "#A8BFC9",
    },
    forth: {
      light: "#DBE8ED",
      main: "#A8BFC9",
      dark: "#A8BFC9",
      contrastText: "#1A2A33",
    },
    fifth: {
      light: "#1F3641",
      main: "#1F3641",
      dark: "#1F3641",
      contrastText: "#1A2A33",
    },
  },
});

function App() {
  const [pickSymbol, setPickSymbol] = useState("x");
  const [vsCPU, setVsCPU] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <NewGame
                pickSymbol={pickSymbol}
                setPickSymbol={setPickSymbol}
                setVsCPU={setVsCPU}
              />
            }
          />
          <Route
            path="/game"
            element={
              <CPUGame
                pickSymbol={pickSymbol}
                setPickSymbol={setPickSymbol}
                vsCPU={vsCPU}
              />
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
