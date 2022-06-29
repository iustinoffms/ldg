import Functionalities from "./components/Functionalities";
import Display from "./components/Display";
import { useState } from "react";

const CalculatorContainer = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipInput, setTipInput] = useState("");
  const [peopleInput, setPeopleInput] = useState("");

  const resetAll = () => {
    setBillAmount("");
    setTipInput("");
    setPeopleInput("");
  };

  //   console.log("bill", billAmount);
  //   console.log("tip", tipInput);
  //   console.log("people", peopleInput);

  return (
    <>
      <div className="calculator-container">
        <Functionalities
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          tipInput={tipInput}
          setTipInput={setTipInput}
          peopleInput={peopleInput}
          setPeopleInput={setPeopleInput}
        />
        <Display
          billAmount={billAmount}
          peopleInput={peopleInput}
          tipInput={tipInput}
          resetAll={resetAll}
        />
      </div>
    </>
  );
};

export default CalculatorContainer;
