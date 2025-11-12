import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function TodoLista({ listTitle, todoList, addTodos }) {
  return (
    <>
      <div className="todo-lista">
        {/* <li> */}
        <AddTodo addTodos={addTodos} />

        <label>{listTitle}</label>
        <button>Delete List</button>

        {todoList.map((item) => (
          <TodoItem todoItemTitle={item.title} key={item.id} />
        ))}
        {/* </li> */}
      </div>
    </>
  );
}
