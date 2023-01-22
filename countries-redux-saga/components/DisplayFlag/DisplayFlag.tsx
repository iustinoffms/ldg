import _ from "lodash";
import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import {
  addAnswer,
  answerRequest,
  selectFlagScreenData,
} from "../../features/countriesSlice";

const widths: Record<number, string> = {
  0: "w-[0%]",
  1: "w-[10%]",
  2: "w-[20%]",
  3: "w-[30%]",
  4: "w-[40%]",
  5: "w-[50%]",
  6: "w-[60%]",
  7: "w-[70%]",
  8: "w-[80%]",
  9: "w-[90%]",
  10: "w-[100%]",
};

const DisplayFlag = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const [timer, setTimer] = React.useState<number>(10);

  const { options, currentCountry, counter } =
    useSelector(selectFlagScreenData);

  const disableButtons = counter > 9;

  const answerAndNextFlag = (e: any) => {
    dispatch(addAnswer(e.target.value));
  };

  const seeTheResults = () => {
    push("/results");
  };

  React.useEffect(() => {
    dispatch(answerRequest());
    const intervalId = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => {
      setTimer(10);
      clearInterval(intervalId);
    };
  }, [counter, dispatch]);

  return (
    <>
      <div className="">
        <h2 className="text-5xl text-center py-10 text-amber-200 font-bold text-opacity-70 ">
          What country is this ?
        </h2>
        <div className="flex justify-center mt-20">
          <div className="" style={{ width: "700px", height: "400px" }}>
            <img
              src={currentCountry?.flag}
              alt="flag"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className=" flex justify-center gap-28 my-20 mx-20">
          <button
            value={options[0]?.name}
            className="order-1 w-2/6 p-4 rounded-lg drop-shadow-2xl  bg-neutral-400  hover:bg-teal-400"
            onClick={answerAndNextFlag}
            disabled={disableButtons}
          >
            {options[0]?.name}
          </button>
          <button
            value={options[1]?.name}
            className="order-2 p-4  w-2/6 rounded-lg drop-shadow-2xl border-neutral-400 bg-neutral-400  hover:bg-teal-400 hover:border-teal-400"
            onClick={answerAndNextFlag}
            disabled={disableButtons}
          >
            {options[1]?.name}
          </button>
          <button
            value={options[2]?.name}
            className="order-3 p-4 w-2/6  rounded-lg drop-shadow-2xl border-neutral-400 bg-neutral-400  hover:bg-teal-400 hover:border-teal-400"
            onClick={answerAndNextFlag}
            disabled={disableButtons}
          >
            {options[2]?.name}
          </button>
        </div>
        <div className={`bg-blue-300 ${widths[timer]} h-7`} />

        <div className="border-2 text-center">
          <button onClick={seeTheResults}>see the results</button>
        </div>
      </div>
    </>
  );
};

export default DisplayFlag;
