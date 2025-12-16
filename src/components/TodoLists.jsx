import TodoLista from "./TodoLista";
export default function TodoLists({
  listObj,
  addTodos,
  deleteTodoList,
  onSelect,
  selectedListId,
  sortTodos,
}) {
  return (
    <>
      <div className="todo-lists ">
        <ul className="flex flex-col gap-4 ">
          {listObj.map((listObj) => (
            <TodoLista
              listTitle={listObj.listTitle}
              addTodos={addTodos}
              key={listObj.id}
              id={listObj.id}
              timeStamp={listObj.timeStamp}
              listColor={listObj.listColor}
              deleteTodoList={deleteTodoList}
              onSelect={onSelect}
              isSelected={selectedListId === listObj.id}
              itemsCount={listObj.todos.length}
              sortTodos={sortTodos}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
