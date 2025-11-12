import TodoLista from "./TodoLista";
// import AddTodo from "./AddTodo";
export default function TodoLists({ listObj, addTodos }) {
  return (
    <>
      {/* <ul>
        {newListObj.map((listObj) => (
          <TodoItem
            title={listObj.listTitle}
            todoItemTitle={listObj.todoList.map((item) => item.title)}
            key={listObj.id}
          />
        ))}
      </ul> */}
      {/* <AddTodo addTodos={addTodos} /> */}
      <ul>
        {listObj.map((listObj) => (
          <TodoLista
            listTitle={listObj.listTitle}
            // todoItemTitle={listObj.todoList.map((item) => item.title)}
            todoList={listObj.todoList}
            addTodos={addTodos}
            key={listObj.id}
          />
        ))}
      </ul>
    </>
  );
}
