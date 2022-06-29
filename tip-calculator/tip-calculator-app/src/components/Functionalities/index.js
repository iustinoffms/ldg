import BillInput from "./BillInput";
import SelectTip from "./SelectTip";
import PeopleInput from "./PeopleInput";

const Functionalities = ({
  billAmount,
  setBillAmount,
  tipInput,
  setTipInput,
  peopleInput,
  setPeopleInput,
}) => {
  return (
    <>
      <div className="functiolaities">
        <BillInput billAmount={billAmount} setBillAmount={setBillAmount} />
        <SelectTip tipInput={tipInput} setTipInput={setTipInput} />
        <PeopleInput
          peopleInput={peopleInput}
          setPeopleInput={setPeopleInput}
        />
      </div>
    </>
  );
};

export default Functionalities;
