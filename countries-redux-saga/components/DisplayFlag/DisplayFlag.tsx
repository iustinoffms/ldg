import * as React from "react";
import { useSelector } from "react-redux";
import {
  selectCountries,
  selectShortListCountries,
} from "../../features/countriesSlice";

const DisplayFlag = () => {
  const countries = useSelector(selectCountries);
  const shortListCountries = useSelector(selectShortListCountries);
  console.log(shortListCountries, "here is the fucking list");
  const isLoading = useSelector((state: any) => state.countries.isLoading);
  console.log(isLoading);
  return (
    <div style={{ border: "1px solid blue" }}>
      <h2>Here are the countries</h2>
      <div>
        {countries.map((country: any) => (
          <div key={country.name}>
            <p>{country.name}</p>
            <img src={country.flag} alt="flag" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayFlag;
