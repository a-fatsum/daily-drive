import { useState } from "react";

export default function AddTodoItem({ addTodos }) {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");
  function addTodo(e) {
    e.preventDefault();
    addTodos(newItem, dueDate);
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

        <label htmlFor="due-date">Due date:</label>
        <input
          type="date"
          id="due-date"
          name="due-date"
          returnFormat="YYYY-MM-DD"
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />
        <input
          type="time"
          id="due-time"
          name="due-time"
          // returnFormat="YYYY-MM-DD"
        />
        <button>Add</button>
      </form>
    </>
  );
}
