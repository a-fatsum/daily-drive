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
      <h3>Add a new todo item</h3>
      <form className=" flex flex-col gap-4 mt-2" onSubmit={addTodo}>
        <input
          className="outline-none text-gray-800 p-2 rounded-md bg-white"
          type="text"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <div className="flex text-xs gap-4 items-center justify-between">
          <label htmlFor="due-date">Due date:</label>

          <input
            type="date"
            id="due-date"
            name="due-date"
            className="outline-none text-gray-800 p-2 rounded-md bg-white"
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />

          <input
            type="time"
            id="due-time"
            name="due-time"
            className="outline-none text-gray-800 p-2 rounded-md bg-white"
            onChange={(e) => {
              setDueTime(e.target.value);
            }}
          />
        </div>
        <button className=" hover:bg-green-600 p-2 flex items-center justify-center border rounded-md">
          Add
        </button>

        <hr className="my-4" />
      </form>
    </>
  );
}
