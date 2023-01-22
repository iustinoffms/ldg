import React from "react";
import { useSelector } from "react-redux";
import { selectAnswers, selectCountries } from "../../features/countriesSlice";

const Results = () => {
  const countries = useSelector(selectCountries);
  const answers = useSelector(selectAnswers);

  return (
    <div>
      {countries.map((country: any, index: number) => (
        <div
          key={country.name}
          className="my-20"
          style={{ width: "300px", height: "200px" }}
        >
          <img
            src={country.flag}
            alt="flag"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <p>{country.name}</p>
          <p>{answers[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
