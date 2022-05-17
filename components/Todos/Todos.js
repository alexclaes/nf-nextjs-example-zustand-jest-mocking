import { useState } from "react";
import useStore from "../../lib/useStore";

export default function Todos() {
  const [inputValue, setInputValue] = useState("");

  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(inputValue);
          setInputValue("");
        }}
      >
        <label>
          Todo:
          <input
            required
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </>
  );
}
