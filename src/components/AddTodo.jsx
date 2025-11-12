import { useState } from "react";

export default function AddTodo({ addTodos }) {
  const [newItem, setNewItem] = useState("");
  function addTodo(e) {
    e.preventDefault();
    addTodos(newItem);
  }
  //
  // FORM
  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
}
