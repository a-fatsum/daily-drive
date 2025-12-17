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
}) {
  return (
    <>
      <div className="todo-lists ">
        {/* Drop-down */}
        <div className="mb-4">
          <DropDown sortOptions={sortOptions} sortLists={sortLists} />
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
            />
          ))}
        </ul>
      </div>
    </>
  );
}
