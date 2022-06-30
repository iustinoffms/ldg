import CalculatorContainer from "./CalculatorContainer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "hsl(185, 41%, 84%)",
      main: "hsl(183, 100%, 15%)",
      dark: "hsl(172, 67%, 45%)",
      contrastText: "white",
    },
    secondary: {
      light: "hsl(189, 41%, 97%)",
      main: "hsl(172, 67%, 45%)",
      dark: "hsl(185, 41%, 84%)",
      contrastText: "hsl(183, 100%, 15%)",
    },
    third: {
      light: "hsl(185, 41%, 84%)",
      main: "hsl(185, 41%, 84%)",
      dark: "hsl(185, 41%, 84%)",
      contrastText: "hsl(185, 41%, 84%)",
    },
    forth: {
      light: "hsl(172, 67%, 45%)",
      main: "hsl(172, 67%, 45%)",
      dark: "hsl(172, 67%, 45%)",
      contrastText: "hsl(183, 100%, 15%)",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {" "}
        <CalculatorContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
