import DisplayAmounts from "./DisplayAmounts";
import ResetButton from "./ResetButton";
function Display({ billAmount, peopleInput, tipInput, resetAll }) {
  return (
    <div className="display-container">
      <DisplayAmounts
        billAmount={billAmount}
        peopleInput={peopleInput}
        tipInput={tipInput}
      />
      <ResetButton resetAll={resetAll} />
    </div>
  );
}

export default Display;
