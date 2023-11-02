import React from "react";
import { Categories } from "../App";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {Categories.map((Category) => (
        <option key={Category} value={Category}>
          {Category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
