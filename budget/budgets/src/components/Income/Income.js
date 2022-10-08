import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getIncome } from "../../features/incomeSlice";
import calculateEconomies from "../../utiles/calculateEconimies";

const Income = () => {
  const income = useSelector(getIncome);
  const [currentIncome, setCurrentIncome] = React.useState(income);
  const [inputValue, setInputValue] = React.useState(currentIncome);
  const currentEconomy = calculateEconomies(currentIncome);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentIncome(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="income">
          Insert income:{" "}
          <Input
            id="income"
            value={inputValue}
            type="number"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Income;

const Input = styled.input``;
