import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-05-05"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2024-05-02"),
  },
  {
    id: "e3",
    description: "A Banana",
    amount: 5.99,
    date: new Date("2024-04-19"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 14.99,
    date: new Date("2024-04-17"),
  },
  {
    id: "e5",
    description: "A Book2",
    amount: 18.59,
    date: new Date("2024-04-11"),
  },
  {
    id: "e6",
    description: "A Book2",
    amount: 18.59,
    date: new Date("2024-04-10"),
  },
  {
    id: "e7",
    description: "A Book2",
    amount: 18.59,
    date: new Date("2024-04-09"),
  },
  {
    id: "e8",
    description: "A Book2",
    amount: 18.59,
    date: new Date("2024-04-08"),
  },
  {
    id: "e9",
    description: "A Book2",
    amount: 18.59,
    date: new Date("2024-04-01"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatebleExepnseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updatebleExepnseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatebleExepnseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
