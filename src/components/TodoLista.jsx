// import TodoItem from "./TodoItem";
// import AddTodoItem from "./AddTodoItem";
// import { useState } from "react";
// import ListCategory from "./ListCategory";

export default function TodoLista({
  listTitle,
  timeStamp,
  listColor,
  deleteTodoList,
  id,
  onSelect,
  isSelected,
  itemsCount,
}) {
  function selectLista() {
    onSelect(id);
    console.log("id selected", id);
  }

  return (
    <>
      <div
        className={`flex flex-col p-4 rounded-lg shadow-md ${
          isSelected ? "border-2 border-gray-400" : ""
        }`}
        style={{ backgroundColor: listColor }}
        onClick={selectLista}
      >
        <div className="todo-lista-header flex items-center justify-between ">
          <h2 className="font-bold text-xl">{listTitle}</h2>

          <span className="text-xs">
            Created on: {new Date(timeStamp).toLocaleDateString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex flex-col">
            <p>Items</p> <span>{itemsCount}</span>
          </div>
          <button
            className="mt-3 hover:bg-red-600 p-2 border rounded-md"
            onClick={(e) => {
              e.stopPropagation(); // 👈 IMPORTANT
              deleteTodoList(id);
            }}
          >
            Delete List
          </button>
        </div>
      </div>
    </>
  );
}
