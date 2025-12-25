import TodoLista from "./TodoLista";
// import Select from "react-select";
import DropDown from "./DropDown";

export default function TodoLists({
  listObj,
  addTodos,
  deleteTodoList,
  onSelect,
  selectedListId,
  sortTodos,
  //
  sortOptions, //
  sortLists,
  // percent,
}) {
  return (
    <>
      <div className="todo-lists ">
        {/* Drop-down */}
        <div className="mb-4">
          <DropDown
            sortOptions={sortOptions}
            onChange={sortLists}
            placeholder={"Sort Lists"}
          />
        </div>

        {/* Lists */}
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
              completedTodosCount={
                listObj.todos.filter((todo) => todo.complete === true).length
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
}
