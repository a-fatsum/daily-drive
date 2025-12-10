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
        <div className="todo-lista-header">
          {listTitle}

          <span>Created on: {new Date(timeStamp).toLocaleDateString()}</span>
          <button onClick={() => deleteTodoList(id)}>Delete List</button>
        </div>
        <AddTodoItem addTodos={addTodos} />
        {todos.map((todoItem) => (
          <TodoItem
            todoItemTitle={todoItem.title}
            todoItemDueDate={todoItem.dueDate}
            todoItemDueTime={todoItem.dueTime}
            key={todoItem.id}
          />
        ))}
      </div>
    </>
  );
}
