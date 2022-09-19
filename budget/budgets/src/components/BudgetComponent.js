import React from "react";
import styled from "styled-components";
import { useState } from "react";

function BudgetComponent({ budget }) {
  return (
    <>
      <BudgetContainer>
        <Title>{budget.category}</Title>
        <BugetList>
          {budget.list.map((b, i) => (
            <>
              <ItemAndSum key={i}>
                <BudgetCategory>{b.list_item}</BudgetCategory>
                <BudgetSum>{b.sum}</BudgetSum>
              </ItemAndSum>
              <InsertSpendings />
            </>
          ))}
        </BugetList>
      </BudgetContainer>
    </>
  );
}

function InsertSpendings() {
  const [inputValue, setInputValue] = useState("");

  const [spendings, setSpedings] = useState([]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    spendings.push(inputValue);
    console.log(spendings);
  };

  const sendAllHandler = () => {
    sumAllSpendings(spendings);
  };

  function sumAllSpendings(list) {
    return list.reduce((a, b) => Number(a) + Number(b));
  }
  return (
    <div style={{ flex: 1 }}>
      <form onSubmit={submitHandler}>
        <label htmlFor="spent">
          Spent
          <input
            type="number"
            name="spent"
            id="spent"
            value={inputValue}
            onChange={onChangeHandler}
          />
        </label>
        <input type="submit" />
      </form>

      <div>
        display here the sums
        {/* {spendings && spendings.map((s) => <p>{s}</p>)} */}
      </div>
      <button onClick={sendAllHandler}>Send all</button>
    </div>
  );
}
const BudgetContainer = styled.div`
  border: 1px solid green;
  flex: 1;
  padding: 0.5rem;
`;

const ItemAndSum = styled.div`
  display: flex;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;
const BugetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BudgetCategory = styled.div`
  flex: 1;
`;
const BudgetSum = styled.div`
  flex: 1;
`;

export default BudgetComponent;
