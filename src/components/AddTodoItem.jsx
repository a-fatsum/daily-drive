import { useState } from "react";

export default function AddTodoItem({ addTodos }) {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  function addTodo(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;
    addTodos(newItem, dueDate, dueTime);
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
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />
        <input
          type="time"
          id="due-time"
          name="due-time"
          onChange={(e) => {
            setDueTime(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
}
