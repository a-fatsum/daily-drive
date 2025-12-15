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
}) {
  // const [todos, setTodos] = useState([]);

  // function addTodos(title, dueDate, dueTime) {
  //   setTodos((currentTodos) => {
  //     return [
  //       ...currentTodos,
  //       { id: crypto.randomUUID(), title, dueDate, complete: false, dueTime },
  //     ];
  //   });
  // }

  // function selectLista(e) {
  //   // console.log("that works, ✔️");
  //   // e.currentTarget.style.border = "2px solid #adb5bd";
  // }
  function selectLista() {
    onSelect(id);
    console.log("id selected", id);
  }

  return (
    <>
      {/* <div
        className="todo-lista p-4 rounded-lg shadow-md "
        // set background color of the list
        style={{ backgroundColor: listColor }}
        onClick={selectLista}
      > */}
      <div
        className={`todo-lista p-4 rounded-lg shadow-md ${
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

        {/* <div className="mt-4 ">
          <AddTodoItem addTodos={addTodos} />
        </div> */}

        {/* <div>
          {todos.map((todoItem) => (
            <TodoItem
              todoItemTitle={todoItem.title}
              todoItemDueDate={todoItem.dueDate}
              todoItemDueTime={todoItem.dueTime}
              key={todoItem.id}
            />
          ))}
        </div> */}

        {/* <button
          className=" m-2 hover:bg-red-600 p-2 flex items-center justify-center border rounded-md"
          onClick={() => deleteTodoList(id)}
        >
          Delete List
        </button> */}

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
    </>
  );
}
