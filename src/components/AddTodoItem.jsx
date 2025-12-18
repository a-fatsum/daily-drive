import { useState } from "react";
import DropDown from "./DropDown";

export default function AddTodoItem({ addTodos, sortTodos, sortOptions }) {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;
    addTodos(newItem, dueDate, dueTime);
    setNewItem("");
    setDueDate("");
    setDueTime("");
  }

  return (
    <>
      <form
        onSubmit={addTodo}
        className="flex flex-col gap-4
                 rounded-xl border border-gray-700 bg-[#2b2b2a]
                 p-5 shadow-sm
                 transition-all duration-300
                 hover:shadow-md"
      >
        <h3 className="text-lg font-medium tracking-wide text-gray-100 mb-2">
          Add New Task
        </h3>
        {/* Title input */}
        <input
          className="w-full rounded-lg bg-[#1f1f1e] px-3 py-2 text-sm text-gray-100
                   placeholder:text-gray-500
                   border border-gray-700
                   focus:outline-none focus:ring-2 focus:ring-green-600
                   transition-all"
          type="text"
          placeholder="What needs to be done?"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        {/* Date & Time */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="due-date" className="text-xs text-gray-400">
              Due date
            </label>

            <input
              type="date"
              id="due-date"
              name="due-date"
              value={dueDate}
              className="rounded-lg bg-[#1f1f1e] px-3 py-2 text-sm text-gray-100
                       border border-gray-700
                       focus:outline-none focus:ring-2 focus:ring-green-600
                       transition-all"
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="due-time" className="text-xs text-gray-400">
              Due time
            </label>

            <input
              type="time"
              id="due-time"
              name="due-time"
              value={dueTime}
              className="rounded-lg bg-[#1f1f1e] px-3 py-2 text-sm text-gray-100
                       border border-gray-700
                       focus:outline-none focus:ring-2 focus:ring-green-600
                       transition-all"
              onChange={(e) => setDueTime(e.target.value)}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          className="mt-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium
                   text-white
                   transition-all duration-200
                   hover:bg-green-500 hover:shadow-md
                   active:scale-95"
        >
          Add todo
        </button>

        <hr className="border-gray-700 my-2" />

        {/* Sort */}
        <div className="mb-4">
          <DropDown
            sortOptions={sortOptions}
            onChange={sortTodos}
            placeholder={"Sort Tasks"}
          />
        </div>
      </form>
    </>
  );
}
