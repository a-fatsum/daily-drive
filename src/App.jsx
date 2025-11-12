import { useState } from "react";

import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";
import AddTodoList from "./components/AddTodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [listObj, setListObj] = useState([]);

  // Add todo items into each individual todoList
  function addTodos(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, complete: false },
      ];
    });
  }

  //

  function addTodoList(e, listTitle) {
    e.preventDefault();
    setListObj((currentLists) => {
      return [
        ...currentLists,
        { id: crypto.randomUUID(), listTitle, todoList: todos },
      ];
    });

    console.log("newListItem", listObj);
  }

  //
  return (
    <>
      <AddTodoList addTodoList={addTodoList} />
      {/* <AddTodo addTodos={addTodos} /> */}
      <TodoLists listObj={listObj} key={listObj.id} addTodos={addTodos} />
    </>
  );
}

export default App;
