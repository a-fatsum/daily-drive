import { useState } from "react";
import Select from "react-select";

export default function AddTodoItem({ addTodos, sortTodos, sortOptions }) {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  //
  function addTodo(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;
    addTodos(newItem, dueDate, dueTime);
    setNewItem("");
    setDueDate("");
    setDueTime("");
  }
  const sortSelection = sortOptions.map((selection) => ({
    value: selection.value,
    label: selection.label,
  }));

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#1f1f1e",
      borderColor: state.isFocused ? "#22c55e" : "#3f3f46",
      boxShadow: state.isFocused ? "0 0 0 1px #22c55e" : "none",
      minHeight: 40,
      padding: "0 4px",
      borderRadius: 8,
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        borderColor: "#22c55e",
      },
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#2b2b2a",
      borderRadius: 10,
      marginTop: 8,
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      overflow: "hidden",
    }),

    menuList: (base) => ({
      ...base,
      padding: 6,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#22c55e"
        : state.isFocused
        ? "#3f3f46"
        : "transparent",
      color: state.isSelected ? "#0f172a" : "#e5e7eb",
      padding: "10px 12px",
      borderRadius: 6,
      cursor: "pointer",
      transition: "background-color 0.15s ease",
      "&:active": {
        backgroundColor: "#16a34a",
      },
    }),

    singleValue: (base) => ({
      ...base,
      color: "#e5e7eb",
      fontSize: 13,
    }),

    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
      fontSize: 13,
    }),

    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? "#22c55e" : "#9ca3af",
      transition: "transform 0.2s ease",
      transform: state.selectProps.menuIsOpen
        ? "rotate(180deg)"
        : "rotate(0deg)",
      "&:hover": {
        color: "#22c55e",
      },
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <>
      {/* <h3 className="text-lg font-medium tracking-wide text-gray-100 mb-2">
        Add a new todo
      </h3> */}

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
        <div className="animate-fade-in">
          <Select
            options={sortSelection}
            styles={customStyles}
            onChange={(selectedOption) => sortTodos(selectedOption.value)}
            isSearchable={false}
            placeholder="Sort todos by"
          />
        </div>
      </form>
    </>
  );
}
