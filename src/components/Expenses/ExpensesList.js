import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  let expensesContent = (
    <p className="expenses-list__fallback">No Expenses Found</p>
  );
  if (expenses.length > 0) {
    expensesContent = expenses.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return <div>{expensesContent}</div>;
};

export default ExpensesList;
