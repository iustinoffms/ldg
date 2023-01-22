import _ from "lodash";
import Image from "next/image";
import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnswer,
  answerRequest,
  selectAnswers,
  selectFlagScreenData,
  selectVersion,
} from "../../features/countriesSlice";
import Button from "../Button/Button";

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
  const version = useSelector(selectVersion);
  const answers = useSelector(selectAnswers);
  const { options, currentCountry, counter } =
    useSelector(selectFlagScreenData);

  const [timer, setTimer] = React.useState<number>(10);

  const showSeeTheResults = answers.length === version;

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
      console.log("cleanup function ");
    };
  }, [counter, dispatch]);

  return (
    <>
      <div className="flex flex-col gap-8 max-w-screen-2xl">
        <h2 className="text-5xl text-center  text-title font-bold ">
          What country is this ?
        </h2>
        <span className="text-xl  text-center  text-title font-semibold">
          {counter + 1} / {version}
        </span>
        <div className="flex justify-center mt-8">
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

        {!showSeeTheResults && (
          <div className="flex justify-between gap-8">
            <Button
              className="flex-1"
              value={options[0]?.name}
              onClick={answerAndNextFlag}
              disabled={disableButtons}
            >
              {options[0]?.name}
            </Button>
            <Button
              className="flex-1"
              value={options[1]?.name}
              onClick={answerAndNextFlag}
              disabled={disableButtons}
            >
              {options[1]?.name}
            </Button>
            <Button
              className="flex-1"
              value={options[2]?.name}
              onClick={answerAndNextFlag}
              disabled={disableButtons}
            >
              {options[2]?.name}
            </Button>
          </div>
        )}
        {!showSeeTheResults && (
          <div className="border border-title bg-title  rounded-md">
            <div className={`bg-primary ${widths[timer]} h-7 rounded-md`} />
          </div>
        )}
        {showSeeTheResults && (
          <Button className="bg-accent" onClick={seeTheResults}>
            See the results
          </Button>
        )}
      </div>
    </>
  );
};

export default DisplayFlag;
