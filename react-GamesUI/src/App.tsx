import Form from "./components/Form";
import { useState } from "react";
import ExpensesList from "./expenses-tracker/ExpensesList";
import ExpenseFilter from "./expenses-tracker/ExpenseFilter";
import ExpenseForm from "./expenses-tracker/ExpenseForm";
import categories from "./expenses-tracker/categories";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 25,
      category: "Utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 15,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 20,
      category: "Utilities",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(" ");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  console.log(visibleExpenses);

  if (expenses.length == 0) return null;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpensesList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
