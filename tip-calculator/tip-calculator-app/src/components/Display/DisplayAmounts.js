import PeopleInput from "../Functionalities/PeopleInput";
import { useEffect, useState } from "react";

const DisplayAmounts = ({ billAmount, peopleInput, tipInput }) => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    function validateInputs() {
      if (!Number(billAmount) || !Number(peopleInput) || !Number(tipInput)) {
        setTipAmount(0);
        setTotalAmount(0);
        return;
      }

      setTipAmount((+billAmount * (+tipInput / 100)) / +peopleInput);
      setTotalAmount(
        (+billAmount * (+tipInput / 100)) / +peopleInput +
          billAmount / peopleInput
      );
    }
    validateInputs();
  }, [billAmount, peopleInput, tipInput]);

  return (
    <>
      <div className="tip-amount-person">
        Tip Amount
        <span> {tipAmount.toFixed(2)}</span>
      </div>
      <div className="total-amount-person">
        Total <span> {totalAmount.toFixed(2)}</span>
      </div>
    </>
  );
};
export default DisplayAmounts;
