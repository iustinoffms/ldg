import * as React from "react";
import styled from "styled-components";

import Budget from "../Budget/Budget";

function BudgetCategory({ budgetCategory }) {
  const budgets = budgetCategory.list;

  return (
    <>
      <p>{budgetCategory.category}</p>
      <BudgetCategoryContainer>
        {budgets.map((budget, i) => (
          <Budget key={i} budget={budget} />
        ))}
      </BudgetCategoryContainer>
    </>
  );
}
export default BudgetCategory;

const BudgetCategoryContainer = styled.div`
  border: 2px solid green;
  display: flex;
`;
