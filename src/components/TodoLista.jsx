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

  function addTodos(title, dueDate) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, dueDate, complete: false },
      ];
    });
  }

  return (
    <>
      <div className="todo-lista">
        <div className="todo-lista-header">
          {/* <ListCategory
            category={listTitle}
            timeStamp={timeStamp}
            listColor={listColor}
          /> */}
          {listTitle}

          <select
            name=""
            id=""
            onChange={(e) => {
              document.querySelector(".todo-lista").style.backgroundColor =
                e.target.value;
            }}
          >
            {listColor.map((color, i) => (
              <option
                style={{ backgroundColor: color }}
                // style={{
                //   backgroundColor: listColor[i],
                //   width: "100%",
                //   height: "10px",
                // }}
                key={i}
                value={color}
              >
                {color}
              </option>
            ))}
          </select>

          <span>Created on: {new Date(timeStamp).toLocaleDateString()}</span>
          <button onClick={() => deleteTodoList(id)}>Delete List</button>
        </div>
        <AddTodoItem addTodos={addTodos} />
        {todos.map((todoItem) => (
          <TodoItem
            todoItemTitle={todoItem.title}
            todoItemDueDate={todoItem.dueDate}
            key={todoItem.id}
          />
        ))}
      </div>
    </>
  );
}
