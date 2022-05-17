import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => {
  return {
    todos: [
      { name: "first task", id: nanoid(), isChecked: true },
      { name: "second task", id: nanoid(), isChecked: false },
      { name: "third task", id: nanoid(), isChecked: false },
    ],
    addTodo: (name) => {
      set((state) => {
        return { todos: [...state.todos, { name, id: nanoid() }] };
      });
    },
    deleteTodo: (id) => {
      set((state) => {
        return { todos: state.todos.filter((todo) => todo.id !== id) };
      });
    },
    checkTodo: (id) => {
      set((state) => {
        return {
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
          ),
        };
      });
    },
  };
});

export default useStore;
