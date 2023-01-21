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

  const increaseStopCondition = counter === countries.length - 1;
  // const disableButtons = answers.length === countries.length;

  const answerAndNextFlag = (e: any) => {
    if (!increaseStopCondition) {
      dispatch(increase());
    }
    dispatch(addAnswer(e.target.value));
  };

  if (countries.length === 0) return null;

  return (
    <>
      <div className="">
        <h2 className="text-5xl text-center py-10 text-amber-200 font-bold text-opacity-70 ">
          What country is this ?
        </h2>
        <div className="flex justify-center mt-20">
          <div className="" style={{ width: "700px", height: "400px" }}>
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

        <div className="flex justify-center gap-28 my-20 mx-20">
          <button
            value={countries[counter].name}
            className=" w-2/6 p-4 rounded-lg drop-shadow-2xl  bg-neutral-400  hover:bg-teal-400"
            onClick={answerAndNextFlag}
            // disabled={disableButtons}
          >
            {countries[counter].name}
          </button>
          <button
            value={optionOneCountries[counter].name}
            className="p-4 order-2  w-2/6 rounded-lg drop-shadow-2xl border-neutral-400 bg-neutral-400  hover:bg-teal-400 hover:border-teal-400"
            onClick={answerAndNextFlag}
            // disabled={disableButtons}
          >
            {optionOneCountries[counter].name}
          </button>
          <button
            value={optionTwoCountries[counter].name}
            className="p-4 w-2/6 rounded-lg drop-shadow-2xl border-neutral-400 bg-neutral-400  hover:bg-teal-400 hover:border-teal-400"
            onClick={answerAndNextFlag}
            // disabled={disableButtons}
          >
            {optionTwoCountries[counter].name}
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayFlag;
