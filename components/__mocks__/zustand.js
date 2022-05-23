// @see https://docs.pmnd.rs/zustand/testing

import actualCreate from "zustand";
import { act } from "react-dom/test-utils";
import { nanoid } from "nanoid";

const initialTodos = [
  { name: "first task", id: nanoid(), isChecked: true },
  { name: "second task", id: nanoid(), isChecked: false },
  { name: "third task", id: nanoid(), isChecked: false },
];

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  initialState.todos = initialTodos;
  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

// Reset all stores after each test run
afterEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

export default create;
