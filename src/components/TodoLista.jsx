import TaskProgress from "./TaskProgress";
export default function TodoLista({
  listTitle,
  timeStamp,
  listColor,
  deleteTodoList,
  id,
  onSelect,
  isSelected,
  itemsCount,
  percent,
}) {
  function selectLista() {
    onSelect(id);
    console.log("id selected", id);
  }

  return (
    <>
      <div
        className={`flex flex-col p-4 rounded-lg shadow-md ${
          isSelected ? "border-2 border-gray-400" : ""
        }`}
        style={{ backgroundColor: listColor }}
        onClick={selectLista}
      >
        <div className="todo-lista-header flex flex-col ">
          <h2 className="font-bold text-xl">{listTitle}</h2>

          <div className="text-xs flex min-w-[50%] justify-between">
            <p>Created on:</p>
            <span>{new Date(timeStamp).toLocaleDateString()}</span>
          </div>
        </div>
        <hr class="border-gray-400 my-2" />
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex flex-col gap-2 justify-center">
            <p>
              Items <span>{itemsCount}</span>
            </p>
            <TaskProgress percent={percent} />
          </div>
          <button
            className="mt-3 hover:bg-red-600 p-2 border rounded-md"
            onClick={(e) => {
              e.stopPropagation(); // 👈 IMPORTANT
              deleteTodoList(id);
            }}
          >
            Delete List
          </button>
        </div>
      </div>
    </>
  );
}
