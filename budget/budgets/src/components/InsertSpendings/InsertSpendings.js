import * as React from "react";
import styled from "styled-components";

const InsertSpendings = () => {
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const currentDay = `${day}/${month}/${year}`;

  return (
    <StyledInsertSpendings>
      <title>Insert Speding</title>
      <p>{currentDay}</p>
      <label htmlFor="amount">
        <input type="number" id="amount" name="amount" />
      </label>
      <select>
        <option>Alege categoria</option>
      </select>
      <button>Submit</button>
      <button>Cancel</button>
    </StyledInsertSpendings>
  );
};

export default InsertSpendings;

const StyledInsertSpendings = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid red;
`;
