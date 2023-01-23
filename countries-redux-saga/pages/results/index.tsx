import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Button from "../../components/Button/Button";
import { selectAnswers, selectCountries } from "../../features/countriesSlice";
import Link from "next/link";

const Results = () => {
  const countries = useSelector(selectCountries);
  const answers = useSelector(selectAnswers);
  const { push } = useRouter();

  const finalResults = countries.filter(
    (country: any, index: number) => country.name === answers[index]
  );

  const points = finalResults.length === 1 ? "point" : "points";

  return (
    <div className="flex flex-col items-center gap-4 max-w-screen-2xl ">
      <h2 className="text-5xl text-title ">Results</h2>
      <span className="text-title text-xl">
        Your score is: {finalResults.length} {points}
      </span>

      <div className="grid grid-cols-3 gap-12  ">
        {countries.map((country: any, index: number) => (
          <div
            className=" flex flex-col"
            style={{ height: 320 }}
            key={country.name}
          >
            <div className="relative h-full">
              <Link href={`/details?country=${country.name}`}>
                <Image
                  src={country.flag}
                  alt={country.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <br></br>
            <span className="text-text">Correct answer: {country.name}</span>
            <span className="text-text">Your answer: {answers[index]}</span>
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
