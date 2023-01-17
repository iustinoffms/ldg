import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCountries, increase } from "../../features/countriesSlice";

const DisplayFlag = () => {
  const countries = useSelector(selectCountries);
  const counter = useSelector((state: any) => state.countries.counter);
  console.log(countries.length);
  console.log(counter);
  const dispatch = useDispatch();
  console.log(countries);

  const onClick = () => {
    dispatch(increase());
  };

  const isDisabled = counter === countries.length - 1;
  const isLoading = useSelector((state: any) => state.countries.isLoading);
  return (
    <>
      <div style={{ border: "1px solid blue" }}>
        <h2>What country is this ?</h2>

        <div className="">
          <img src={countries[counter].flag} alt="flag" />
        </div>
        <button>{countries[counter].name}</button>
        <button onClick={onClick} disabled={isDisabled}>
          Next Flag
        </button>
      </div>
    </>
  );
};

export default DisplayFlag;
