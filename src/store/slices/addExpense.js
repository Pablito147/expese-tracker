import { createSlice, nanoid } from "@reduxjs/toolkit";

const addExpense = createSlice({
  name: "expense",
  initialState: {
    name: "",
    expenseValue: 0,
  },
  reducers: {
    addExpense(state, action) {
      state.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeExpense(state, action) {
      const updated = state.filter((expense) => {
        return expense.id !== action.payload;
      });
      state.data = updated;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeExpense(state, action) {
      state.expenseValue = action.payload;
    },
  },
});

export const { changeName, changeExpense } = addExpense.actions;
export const formReducer = addExpense.reducer;
