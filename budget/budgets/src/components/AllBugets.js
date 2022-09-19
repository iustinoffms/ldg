import React from "react";

import styled from "styled-components";
import BudgetComponent from "./BudgetComponent";

function AllBugets({ data }) {
  const allBugets = data.bugets;
  return (
    <AllBugetsContainer>
      {allBugets.map((budget, i) => (
        <BudgetComponent key={i} budget={budget} />
      ))}
    </AllBugetsContainer>
  );
}
export default AllBugets;

const AllBugetsContainer = styled.div`
  border: 1px solid red;
  display: flex;
`;
