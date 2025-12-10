import TodoItem from "./TodoItem";
import AddTodoItem from "./AddTodoItem";
import { useState } from "react";
// import ListCategory from "./ListCategory";

export default function TodoLista({
  listTitle,
  timeStamp,
  listColor,
  deleteTodoList,
  id,
}) {
  const [todos, setTodos] = useState([]);

  function addTodos(title, dueDate, dueTime) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, dueDate, complete: false, dueTime },
      ];
    });
  }

  return (
    <>
      <div
        className="todo-lista p-4 rounded-lg shadow-md "
        // set background color of the list
        style={{ backgroundColor: listColor }}
      >
        <div className="todo-lista-header flex items-center justify-between ">
          <h2 className="font-bold text-2xl">{listTitle}</h2>

          <span className="text-xs">
            Created on: {new Date(timeStamp).toLocaleDateString()}
          </span>
        </div>

        <div className="mt-4 ">
          <AddTodoItem addTodos={addTodos} />
        </div>

        <div>
          {todos.map((todoItem) => (
            <TodoItem
              todoItemTitle={todoItem.title}
              todoItemDueDate={todoItem.dueDate}
              todoItemDueTime={todoItem.dueTime}
              key={todoItem.id}
            />
          ))}
        </div>

        <button
          className=" m-2 hover:bg-red-600 p-2 flex items-center justify-center border rounded-md"
          onClick={() => deleteTodoList(id)}
        >
          Delete List
        </button>
      </div>
    </>
  );
}
