import * as React from "react";
import { useSelector } from "react-redux";
import { getAllBugetCategories } from "../../features/bugetsSlice";
import BudgetCategory from "../BudgetCategory/BudgetCategory";

const BudgetCategories = () => {
  const allBudgetCategories = useSelector(getAllBugetCategories);

  return (
    <div>
      {allBudgetCategories.map((budgetCategory, i) => (
        <BudgetCategory key={i} budgetCategory={budgetCategory} />
      ))}
    </div>
  );
};

export default BudgetCategories;
