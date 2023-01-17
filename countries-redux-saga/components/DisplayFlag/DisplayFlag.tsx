import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegionCountries,
  selectCountries,
} from "../../features/countriesSlice";

const DisplayFlag = () => {
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();
  console.log(countries);

  const isLoading = useSelector((state: any) => state.countries.isLoading);

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
