import React from "react";
import styled from "styled-components";

const Income = ({ setCurrentIncome, inputValue, setInputValue }) => {
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

const Container = styled.div`
  border: 1px solid red;
`;
