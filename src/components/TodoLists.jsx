import TodoLista from "./TodoLista";
export default function TodoLists({
  listObj,
  addTodos,
  deleteTodoList,
  onSelect,
  selectedListId,
}) {
  return (
    <>
      <div className="todo-lists ">
        <ul className="flex flex-col gap-4 ">
          {listObj.map((listObj) => (
            <TodoLista
              listTitle={listObj.listTitle}
              todoList={listObj.todoList}
              addTodos={addTodos}
              key={listObj.id}
              id={listObj.id}
              timeStamp={listObj.timeStamp}
              listColor={listObj.listColor}
              deleteTodoList={deleteTodoList}
              onSelect={onSelect}
              isSelected={selectedListId === listObj.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
