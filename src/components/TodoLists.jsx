import TodoLista from "./TodoLista";
export default function TodoLists({ listObj, addTodos, deleteTodoList }) {
  return (
    <>
      <div className="todo-lists  flex flex-col gap-4">
        <ul>
          {listObj.map((listObj) => (
            <TodoLista
              listTitle={listObj.listTitle}
              todoList={listObj.todoList}
              addTodos={addTodos}
              key={listObj.id}
              timeStamp={listObj.timeStamp}
              listColor={listObj.listColor}
              deleteTodoList={deleteTodoList}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
