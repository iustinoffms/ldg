import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountries,
  selectOptionOneCountries,
  selectOptionTwoCountries,
  increase,
  addAnswer,
  selectAnswers,
} from "../../features/countriesSlice";

const DisplayFlag = () => {
  const countries = useSelector(selectCountries);
  const optionOneCountries = useSelector(selectOptionOneCountries);
  const optionTwoCountries = useSelector(selectOptionTwoCountries);
  const counter = useSelector((state: any) => state.countries.counter);
  const answers = useSelector(selectAnswers);
  const dispatch = useDispatch();
  console.log(countries);
  console.log(answers);

  const increaseCounter = (e: any) => {
    dispatch(increase());

    dispatch(addAnswer(e.target.value));
  };

  const isDisabled = counter === countries.length - 1;
  const isLoading = useSelector((state: any) => state.countries.isLoading);
  return (
    <>
      <div className="" style={{ border: "10px solid blue" }}>
        <h2 className="text-5xl text-center py-10 text-amber-200 font-bold text-opacity-70 border-8 border-violet-300">
          What country is this ?
        </h2>
        <div className="flex justify-center border-2 border-yellow-500">
          <div
            className="border-8 border-teal-400"
            style={{ width: "700px", height: "400px" }}
          >
            <img
              src={countries[counter].flag}
              alt="flag"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="flex justify-center gap-28 my-10">
          <button
            value={countries[counter].name}
            className="border-2 w-2/6 p-4 rounded-lg drop-shadow-2xl border-neutral-400 bg-neutral-400  hover:bg-teal-400 hover:border-teal-400"
            onClick={increaseCounter}
            disabled={isDisabled}
          >
            {countries[counter].name}
          </button>
          <button
            value={optionOneCountries[counter].name}
            className="border-2 p-4  w-2/6 rounded-lg drop-shadow-2xl border-neutral-400 bg-neutral-400  hover:bg-teal-400 hover:border-teal-400"
            onClick={increaseCounter}
            disabled={isDisabled}
          >
            {optionOneCountries[counter].name}
          </button>
          <button
            value={optionTwoCountries[counter].name}
            className="border-2 p-4 w-2/6 rounded-lg drop-shadow-2xl border-neutral-400 bg-neutral-400  hover:bg-teal-400 hover:border-teal-400"
            onClick={increaseCounter}
            disabled={isDisabled}
          >
            {optionTwoCountries[counter].name}
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayFlag;
