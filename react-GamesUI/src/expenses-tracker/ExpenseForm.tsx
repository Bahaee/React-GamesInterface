import React from "react";
import { Categories } from "../App";
const ExpenseForm = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="decription" className="label-form">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="label-form">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="label-form">
          Category
        </label>
        <select id="category" className="form-select">
          <option value=""></option>
          {Categories.map((Category) => (
            <option key={Category} value={Category}>
              {Category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
