import "./App.css";
import Income from "./components/Income";
import { useState } from "react";

import calculateEconomies from "./utiles/calculateEconimies";

import GlobalStyle from "./components/Layout/GlobalStyle";
import AllBugets from "./components/AllBugets";

function App({ data }) {
  const [currentIncome, setCurrentIncome] = useState(data.income);
  const [inputValue, setInputValue] = useState(currentIncome);
  const currentEconomy = calculateEconomies(currentIncome);
  return (
    <>
      <GlobalStyle />

      <Income
        data={data}
        currentIncome={currentIncome}
        setCurrentIncome={setCurrentIncome}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <AllBugets data={data} />
    </>
  );
}

export default App;
