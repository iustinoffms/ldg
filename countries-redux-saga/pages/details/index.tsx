import * as React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RxCaretLeft } from "react-icons/rx";

import { selectCountries } from "../../features/countriesSlice";

const Details = () => {
  const { query, back } = useRouter();
  const countries = useSelector(selectCountries);
  const currentCountry = query.country as string;

  const countryDetails = countries.find(
    (country: any) => country.name === currentCountry
  );

  console.log(countryDetails.languages[0]);

  return (
    <>
      <button
        onClick={() => {
          back();
        }}
        className="flex self-start font-extrabold text-4xl p-2 ml-4 text-text rounded"
      >
        <RxCaretLeft />
      </button>
      <div className="flex flex-col justify-center text-text items-center gap-8">
        <h2 className="text-5xl">{countryDetails.name}</h2>
        <img src={countryDetails.flags.png} alt={countryDetails.flags.png} />

        <p>Capital: {countryDetails.capital}</p>
        <div className="flex gap-2">
          Currency:
          <span> {countryDetails.currencies[0].name}</span>,
          <span> {countryDetails.currencies[0].code}</span>,
          <span> {countryDetails.currencies[0].symbol}</span>
        </div>

        <div>
          Languages:{" "}
          {countryDetails.languages.map((language: any) => (
            <span key={language.name}>{language.name} </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
