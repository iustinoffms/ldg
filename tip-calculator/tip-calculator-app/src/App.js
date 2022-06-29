import CalculatorContainer from "./CalculatorContainer";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#cccccc",
      main: "#004d40",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#26a69a",
      dark: "#ba000d",
      contrastText: "#000",
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
