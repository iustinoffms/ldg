import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { selectAnswers, selectCountries } from "../../features/countriesSlice";
import { useRouter } from "next/router";

const Results = () => {
  const countries = useSelector(selectCountries);
  const answers = useSelector(selectAnswers);
  const [score, setScore] = React.useState();
  const { push } = useRouter();

  const finalResults = countries.filter(
    (country: any, index: number) => country.name === answers[index]
  );

  // dispatch(setScore(finalResults.length));

  return (
    <div className="flex flex-col items-center gap-4 max-w-screen-2xl ">
      <h2 className="text-5xl text-title ">Results</h2>
      <span className="text-title text-xl">
        Your score is: {finalResults.length} points
      </span>

      <div className="grid grid-cols-3 gap-12  ">
        {countries.map((country: any, index: number) => (
          <div style={{ height: "300px" }} key={country.name}>
            <img
              src={country.flag}
              alt="flag"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            <p className="text-text">Correct answer: {country.name}</p>
            <p className="text-text">Your answer: {answers[index]}</p>
          </div>
        ))}
      </div>
      <Button
        onClick={() => {
          push("/");
        }}
      >
        Play again
      </Button>
    </div>
  );
};

export default Results;
