import React from "react";
import Expenseitem from "./Expenseitem";

function Expenselist({income, setIncome}) {
  const removeIncome = i => {
    let temp = income.filter((v, index) => index !== i);
    setIncome(temp);
  }
const sortByDate = (a,b) =>{
  return a.date - b.date
}

  return (
    <div className="expense-list">
      {income.sort(sortByDate).map((value, index) => (
        <Expenseitem
          key={index}
          income={value}
          index={index}
          removeIncome={removeIncome}
        />
      ))}
    </div>
  );
}

export default Expenselist;
