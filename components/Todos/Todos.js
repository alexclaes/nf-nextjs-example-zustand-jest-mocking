import { useState } from "react";
import useStore from "../../lib/store/useStore";

export default function Todos({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          addTodo(inputValue);

          onSubmit && onSubmit(inputValue);

          setInputValue("");

          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
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
      {showSuccessMessage && <p>todo was added</p>}
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </>
  );
}
