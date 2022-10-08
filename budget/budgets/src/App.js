import Income from "./components/Income/Income";
import GlobalStyle from "./Layout/GlobalStyle";
import InsertSpendings from "./components/InsertSpendings/InsertSpendings";
import AllCategories from "./components/BudgetCategories/BudgetCategories";

function App() {
  return (
    <>
      <GlobalStyle />
      <Income />
      <InsertSpendings />
      <AllCategories />
    </>
  );
}

export default App;
